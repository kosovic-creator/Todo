/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react"; // Corrected import
import { createUserAction } from "@/actions";
import { Label } from "@/components/ui/label";

const CreateUser = () => {
  const [formState, setFormState] = useState({ message: "" }); // Updated hook

  const action = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target as HTMLFormElement);
      await createUserAction(formState, formData);
      setFormState({ message: "User created successfully!" });
    } catch (error) {
      setFormState({ message: "Error creating user." });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen" >



    <form onSubmit={action} className="flex  flex-col gap-3 w-100 p-10  border-gray-100 rounded shadow ">
      <h1>Dodaj novog Korisnika</h1>
      <Label>Ime i Prezime</Label>
      <input id="name" name="name" className="border rounded p-2 w-full" />

      <Label>Korisnik</Label>
      <input
        id="username"
        name="username"
        className="border rounded p-2 w-full"
      />
      <Label>Email</Label>
      <input
        id="email"
        name="email"
        className="border rounded p-2 w-full"
      />
      <Label>Šifra</Label>
      <input
        id="password"
        name="password"
        type="password"
        className="border rounded p-2 w-full"
      />
      <input
        type="submit"
        value="Dodaj Korisnika"
        className="rounded p-2 bg-black text-white hover:bg-gray-800 cursor-pointer"
      />
      {formState.message && <p className="text-red-500">{formState.message}</p>}
    </form>
    </div>
  );
};
export default CreateUser;
