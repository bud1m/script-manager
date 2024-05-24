import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany({});
  await prisma.script.deleteMany({});

  // Create users
  const user1 = await prisma.user.create({
    data: {
      username: "user1",
      email: "user1@example.com",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: "user2",
      email: "user2@example.com",
    },
  });

  // Create scripts
  const script1 = await prisma.script.create({
    data: {
      title: "Script 1",
      location: "/scripts/script1.js",
      isPublic: true,
      author: {
        connect: { id: user1.id },
      },
    },
  });

  const script2 = await prisma.script.create({
    data: {
      title: "Script 2",
      location: "/scripts/script2.js",
      isPublic: false,
      author: {
        connect: { id: user2.id },
      },
    },
  });

  console.log({ user1, user2, script1, script2 });
}

main()
  .then(() => {
    console.log("Seed data created successfully!");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
