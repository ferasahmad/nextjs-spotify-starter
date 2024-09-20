"use client";
import WithAuth from "@/hoc/withAuth";

function Home() {
  return (
    <div>
      <h1>Welcome to TopSpin</h1>
      <p>
        This is the protected main page. Only authenticated users can access
        this page.
      </p>
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
