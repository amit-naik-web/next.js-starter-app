"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import TextButton from "./TextButton";

export default function AuthButton() {
  const { data: session } = useSession();

  return (
    <TextButton
      onClick={() => (session ? signOut() : signIn())}
      text={session ? "Sign Out" : "Sign In"}
      type={"button"}
    />
  );
}
