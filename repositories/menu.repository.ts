import { prisma } from "@/lib/prisma";

export async function getAllMenus() {
  return prisma.menu.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getMenuById(id: string) {
  return prisma.menu.findUnique({
    where: { id },
  });
}

export async function createMenu(data: {
  title: string;
  description: string;
  price: number;
  stock: number;
}) {
  return prisma.menu.create({
    data,
  });
}