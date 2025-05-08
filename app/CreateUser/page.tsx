/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react"; // Corrected import
import { createUserAction } from "@/actions";

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
    <form onSubmit={action} className="flex flex-col gap-3 w-1/2">
      <h1>Create New User</h1>
      <label>Full Name</label>
      <input id="name" name="name" className="border rounded p-2 w-full" />

      <label>Username</label>
      <input
        id="username"
        name="username"
        className="border rounded p-2 w-full"
      />
      <label>Email</label>
      <input
        id="email"
        name="email"
        className="border rounded p-2 w-full"
      />
      <label>Password</label>
      <input
        id="password"
        name="password"
        type="password"
        className="border rounded p-2 w-full"
      />
      <input
        type="submit"
        value="Create User"
        className="rounded p-2 bg-blue-300 hover:bg-blue-200"
      />
      {formState.message && <p className="text-red-500">{formState.message}</p>}
    </form>
  );
};
export default CreateUser;
