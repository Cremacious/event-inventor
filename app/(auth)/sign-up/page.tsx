import SignUpForm from './sign-up-form';

const SignUpPage = () => {
  return (
    <>
      <div className="sm:px-4">
        <div className="min-h-screen flex flex-col items-center justify-center">
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
