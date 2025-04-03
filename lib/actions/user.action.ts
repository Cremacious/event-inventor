import { currentUser } from '@clerk/nextjs/server';
import { db } from '@/lib/db';

export const checkUser = async () => {
  const user = await currentUser();
  console.log(user);

  // Check for current logged in clerk user
  if (!user) {
    return null;
  }

  // Check if the user is already in the database by Clerk user ID
  const loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  // If user is in database, return user
  if (loggedInUser) {
    return loggedInUser;
  }

  // Check if a user with the same email already exists
  const existingUserByEmail = await db.user.findUnique({
    where: {
      email: user.emailAddresses[0].emailAddress,
    },
  });

  if (existingUserByEmail) {
    // Update the existing user with the Clerk user ID and return the updated user
    const updatedUser = await db.user.update({
      where: {
        email: user.emailAddresses[0].emailAddress,
      },
      data: {
        clerkUserId: user.id,
        name: `${user.firstName} ${user.lastName}`,
        imageUrl: user.imageUrl,
      },
    });
    return updatedUser;
  }

  // If not in database, create new user
  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newUser;
};
