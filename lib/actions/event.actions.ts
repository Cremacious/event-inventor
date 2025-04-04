import { currentUser } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { insertEventSchema } from '../validators';
import { z } from 'zod';

export async function createEvent(data: z.infer<typeof insertEventSchema>) {
  try {
    const event = insertEventSchema.parse(data);

    const user = await currentUser();

    if (!user) {
      throw new Error('User is not authenticated.');
    }

    // Find the user in the database by Clerk user ID
    const dbUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (!dbUser) {
      throw new Error('User not found in the database.');
    }

    await db.event.create({
      data: {
        ...event,
        user: {
          connect: {
            id: dbUser.id,
          },
        },
      },
    });
    return { success: true, message: 'Event created successfully' };
  } catch (error) {
    return { success: false, message: error };
  }
}
