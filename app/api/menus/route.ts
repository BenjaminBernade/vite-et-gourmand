import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const menus = await prisma.menu.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(menus);

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { error: "Erreur récupération menus" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { title, description, price } = body;

    const menu = await prisma.menu.create({
      data: {
        title,
        description,
        price: Number(price),
        stock: 0,
      },
    });

    return NextResponse.json(menu);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Erreur création menu" },
      { status: 500 }
    );
  }
}