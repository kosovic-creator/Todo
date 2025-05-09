import options from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Link from "next/link";
 import {  HomeIcon } from "lucide-react";

import SignOutButton from "./SignOutButton";


const Nav = async () => {
  const session = await getServerSession(options);
  return (
    <header  >
      <nav  className="flex justify-between items-center w-full px-10 py-4 bg-black text-white">
       <Link href="/"><HomeIcon/></Link>
      {/* {session ? <Link href="/todo">Podsjetnik</Link> : null}
        <div className="flex gap-10">
          {session?.user.role == "ADMIN" && (
            <Link href="/CreateUser">Dodaj Korisnika</Link>
          )} */}
          {session ? (
            <>
              <p className=" p-1">korisnik: {session.user.name}</p>
              <SignOutButton />
            </>
          ) : (
            null
          )}
      </nav>
    </header>
  );
};
export default Nav;