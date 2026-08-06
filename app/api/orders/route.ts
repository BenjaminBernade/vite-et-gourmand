import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
  try {
    const session = await getServerSession();

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Non autorisé" },
        { status: 401 }
      );
    }

    const body = await req.json();

    const { menuId, quantity } = body;

    const parsedQuantity = Number(quantity);

    if (
      !menuId ||
      !Number.isInteger(parsedQuantity) ||
      parsedQuantity < 1
    ) {
      return NextResponse.json(
        { error: "Données de commande invalides" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Utilisateur introuvable" },
        { status: 404 }
      );
    }

    const menu = await prisma.menu.findUnique({
      where: {
        id: menuId,
      },
    });

    if (!menu) {
      return NextResponse.json(
        { error: "Menu introuvable" },
        { status: 404 }
      );
    }

    const totalPrice = menu.price * parsedQuantity;

    const order = await prisma.order.create({
      data: {
        quantity: parsedQuantity,
        totalPrice,
        status: "EN_ATTENTE",
        userId: user.id,
        menuId: menu.id,
      },
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Erreur création commande" },
      { status: 500 }
    );
  }
}