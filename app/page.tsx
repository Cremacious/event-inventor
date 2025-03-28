import { SignInButton, SignUpButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <>
      Home
      <SignInButton />
      <SignUpButton />
    </>
  );
}
