import { hash } from "bcryptjs";
import { prisma } from "../lib/prisma";

interface registerUseCaseParams {
  name: string;
  email: string;
  password: string;
}

export async function registerUseCase({
  name,
  email,
  password,
}: registerUseCaseParams) {
  const passwordHash = await hash(password, 5);
  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (userWithSameEmail) {
    throw new Error("Email already exists");
  }
  await prisma.user.create({
    data: {
      name,
      email,
      password_hash: passwordHash,
    },
  });
}
