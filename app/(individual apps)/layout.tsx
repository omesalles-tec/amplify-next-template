"use client";
import { useAuthenticator } from '@aws-amplify/ui-react';
import Navigator from "@/app/components/Navigator";
import Login from "@/app/components/Login";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user, signOut } = useAuthenticator(context => [context.user]);

  return (
    <>
      {
        !!user ? 
        (<>
          <Navigator />
          <main>{children}</main>
        </>) :
        <Login />
      }
    </>
  );
};