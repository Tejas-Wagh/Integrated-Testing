import { prisma } from "./db";

export async function resestDB() {
  await prisma.data.deleteMany();
}
