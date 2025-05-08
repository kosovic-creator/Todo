
'use client';
import { useSession, signIn, signOut } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session.user?.email}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
