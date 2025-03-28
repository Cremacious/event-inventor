import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <>
      <div className="sm:px-4">
        <div className="min-h-screen flex flex-col items-center justify-center">
          <SignUp />
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
