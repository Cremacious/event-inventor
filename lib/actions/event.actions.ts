'use server';

import { auth } from '@/auth';
import { formatError } from '../utils';
import { insertEventSchema } from '../validators';
import { prisma } from '@/db/prisma';
import { z } from 'zod';

export async function createEvent(data: z.infer<typeof insertEventSchema>) {
  try {
    const session = await auth();
    if (!session) {
      throw new Error('User not authenticated');
    }
    const userId = session?.user?.id;
    const dbUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!dbUser) {
      throw new Error('User not found in the database.');
    }

    const event = insertEventSchema.parse(data);
    await prisma.event.create({
      data: {
        ...event,
        userId: dbUser.id,
      },
    });
    return { success: true, message: `Event ${event.name} created successfully` };
  } catch (error) {
    console.error('Error in createEvent:', error);
    return {
      success: false,
      message: formatError(error),
    };
  }
}
