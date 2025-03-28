import { SignOutButton, UserButton } from '@clerk/nextjs';

const ProfilePage = () => {
  return (
    <>
      Profile page
      <UserButton />
      <SignOutButton />
    </>
  );
};

export default ProfilePage;
