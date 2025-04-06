// import Image from 'next/image';
// import stock from '@/public/images/stock.jpg';

import SignInForm from './sign-in-form';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const SignInPage = async () => {
  try {
    const session = await auth();

    if (session) {
      return redirect('/dashboard');
    }
  } catch (error) {
    console.error('Error in SignInPage:', error);
  }
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        {/* Login Form */}
        <div className="flex items-center justify-center p-4">
          <SignInForm />
        </div>

        {/* Image */}
        {/* <div className="hidden md:flex items-center justify-center">
          <div className="relative w-full h-[95%]">
            <Image
              src={stock}
              alt="login-image"
              className="object-cover rounded-lg"
              fill
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SignInPage;

// fallbackRedirectUrl="/dashboard"
