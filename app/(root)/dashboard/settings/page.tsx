import { UserProfile } from '@clerk/nextjs';

const SettingsPage = () => {
  return (
    <>
      <div className="container flex justify-center items-center h-full">
        <UserProfile />
      </div>
    </>
  );
};

export default SettingsPage;
