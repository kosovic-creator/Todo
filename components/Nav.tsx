import options from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Link from "next/link";
 import {  HomeIcon } from "lucide-react";

import SignOutButton from "./SignOutButton";


const Nav = async () => {
  const session = await getServerSession(options);
  //console.log(session);
  return (
    <header className="bg-black text-white w-full">
      <nav className="flex justify-between items-center w-full px-10 py-4">
       <Link href="/"><HomeIcon/></Link>
      {/* {session ? <Link href="/todo">Podsjetnik</Link> : null}
        <div className="flex gap-10">
          {session?.user.role == "ADMIN" && (
            <Link href="/CreateUser">Dodaj Korisnika</Link>
          )} */}


          {session ? (
            <>
           <div className="flex flex-col gap-2">


              <p className=" p-1">korisnik: {session.user.name}</p>
           </div>

              <SignOutButton />
              {/* <Link href="/login">Odjava </Link> */}

              {/* <p>{session.user.email}</p> */}
              {/* <Link signOut() href="/login">Odjavi se</Link> */}


            </>
          ) : (
            <Link href="/auth/login"> </Link>
          )}
      </nav>
    </header>
  );
};
export default Nav;