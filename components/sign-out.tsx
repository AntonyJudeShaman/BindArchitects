"use client";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default function SignOut() {
  return (
    <Button
    aria-label="Signout"
      className="border border-zinc-500 bg-background  hover:bg-zinc-900 text-accent-foreground  font-bold right-10 button top-5 right-10 absolute transition-all"
      onClick={() => signOut()}
    >
      Sign out
    </Button>
  );
}
