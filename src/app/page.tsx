"use client";
import SpotifyButton from "@/components/SpotifyButton";
import WithAuth from "@/hoc/withAuth";
import { signOut } from "next-auth/react";

function Home() {
  return (
    <div className="flex flex-1 items-center justify-center flex-col gap-4">
      <h1 className="text-5xl">Welcome!</h1>
      <p>
        This is the protected main page. Only authenticated users can access
        this page.
      </p>
      <SpotifyButton onClick={signOut}>Sign out</SpotifyButton>
    </div>
  );
}

export default function ProtectedHomePage() {
  return (
    <WithAuth>
      <Home />
    </WithAuth>
  );
}
