import { PrismaClient } from "@prisma/client/edge";

let prisma: PrismaClient;

declare global {
  var prisma: PrismaClient;
}

if (!global.prisma) {
  global.prisma = new PrismaClient();
}
prisma = global.prisma;
export default prisma;
