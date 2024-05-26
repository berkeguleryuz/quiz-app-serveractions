"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { HandCoins } from "lucide-react";

function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between p-4 -mb-1 mx-auto border-b rounded-full max-w-5xl gap-2">
      <div>
        <Link
          href={"/"}
          className="flex flex-row items-center justify-center gap-2">
          <h2 className="font-bold text-3xl">QuizApp</h2>
          <HandCoins className="h-6 w-6" />
        </Link>
      </div>
      <div className="flex gap-20">
        <Button asChild variant={"link"}>
          <Link href={"/"}>Quiz</Link>
        </Button>
        <Button asChild variant={"link"}>
          <Link href={"/"}>About</Link>
        </Button>
        <Button asChild variant={"link"}>
          <Link href={"/"}>Dashboard</Link>
        </Button>
      </div>
      <div className="">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Navbar;
