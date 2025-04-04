import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';

async function main() {
  const prisma = new PrismaClient();
  await prisma.event.deleteMany();

  await prisma.event.createMany({ data: sampleData.events });

  console.log('Database seeded successfully');
}

main();
