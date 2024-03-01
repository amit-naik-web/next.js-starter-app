"use client";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: { children: React.ReactNode }): any => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
