import { NextApiRequest, NextApiResponse } from 'next';

import { currentUser } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { insertEventSchema } from '@/lib/validators';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('API route hit');
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const user = await currentUser();

    if (!user) {
      return res.status(401).json({ success: false, message: 'User is not authenticated.' });
    }

    const data = req.body;

    // Validate the data using Zod
    const event = insertEventSchema.parse(data);

    // Find the user in the database by Clerk user ID
    const dbUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (!dbUser) {
      return res.status(404).json({ success: false, message: 'User not found in the database.' });
    }

    // Create the event in the database
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

    return res.status(200).json({ success: true, message: 'Event created successfully' });
  } catch (error) {
    return res.status(400).json({ success: false, message: `error.message ${error} `});
  }
}