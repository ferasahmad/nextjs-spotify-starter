"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface WithPublicProps {
  children: ReactNode;
  redirectTo?: string;
}

export default function WithPublic({
  children,
  redirectTo = "/dashboard",
}: WithPublicProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push(redirectTo);
    }
  }, [session, router, redirectTo]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <>{!session ? children : null}</>;
}
