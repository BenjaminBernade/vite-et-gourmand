import {
  createMenu,
  getAllMenus,
  getMenuById,
} from "@/repositories/menu.repository";

export async function listMenus() {
  return getAllMenus();
}

export async function findMenu(id: string) {
  return getMenuById(id);
}

export async function addMenu(data: {
  title: string;
  description: string;
  price: number;
  stock: number;
}) {
  return createMenu(data);
}