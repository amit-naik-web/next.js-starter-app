"use server";
import { signIn, signOut } from "next-auth/react";

export async function handleSignOut() {
  await signOut();
}

export async function handleSignIn() {
  if (typeof window !== "undefined") {
    // Code that references window object
    await signIn();
  }
}
