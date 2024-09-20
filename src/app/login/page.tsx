"use client";
import WithPublic from "@/hoc/withPublic";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <p>Please sign in to access the app.</p>
      <button onClick={() => signIn("spotify")}>Sign in with Spotify</button>
    </div>
  );
}

export default function PublicLoginPage() {
  return (
    <WithPublic>
      <Login />
    </WithPublic>
  );
}
