
'use client';
import { useSession, signIn, signOut } from "next-auth/react";
import LoginPage from "./auth/login/page";
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
     <LoginPage />
     
    </>
  );
}
