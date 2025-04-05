'use server';

import { auth } from '@/auth';
import { insertEventSchema } from '../validators';
import { prisma } from '@/db/prisma';
import { z } from 'zod';

export async function createEvent(data: z.infer<typeof insertEventSchema>) {
  try {
    console.log('Creating event with data:', data);

    const session = await auth();
    console.log('Session:', session); // Log the session

    if (!session) {
      throw new Error('User not authenticated');
    }

    const userId = session?.user?.id;
    console.log('User ID:', userId); // Log the user ID

    const dbUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    console.log('Database User:', dbUser); // Log the database user

    if (!dbUser) {
      throw new Error('User not found in the database.');
    }

    const event = insertEventSchema.parse(data);
    console.log('Parsed event data:', event);

    const createdEvent = await prisma.event.create({
      data: {
        ...event,
        userId: dbUser.id,
      },
    });
    console.log('Created Event:', createdEvent);

    return { success: true, message: 'Event created successfully' };
  } catch (error) {
    console.error('Error in createEvent:', error);
    return {
      success: false,
      message: `${error}`,
    };
  }
}
