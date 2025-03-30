import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      Home
      <Link className="bg-white h-30" href="/sign-in">
        Sign In
      </Link>
      <UserButton />
    </>
  );
}
