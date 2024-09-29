"use client";

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure(outputs);

export default function Page() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
      <main>
        <h1>Another page</h1>
        <button onClick={signOut}>Sign out</button>
      </main>
      )}
    </Authenticator>
  );
}
