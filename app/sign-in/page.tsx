"use client";

import { useState, useEffect } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import "@/app/app.css";
import "@cloudscape-design/global-styles/index.css";
import outputs from "@/amplify_outputs.json";
import getSessionInfo from "@/app/utils/serverSideGetSessionInfo";

Amplify.configure(outputs, {
  ssr: true,
});

export default function SignIn() {
  const [sessionInfo, setSessionInfo] = useState("");
  useEffect(() => {
    getSessionInfo().then((x) => setSessionInfo(x as string));
  }, []);

  return (
    <Authenticator>
      {({ signOut, user }) => {
        if (user) {
          //router.push(`/${sessionInfo}`);
          console.log(sessionInfo);
        }
        return (
          <main>
            <div>
              <a href={`/${sessionInfo}`}>Home</a>
            </div>
            <button onClick={signOut}>Sign out</button>
          </main>
        );
      }}
    </Authenticator>
  );
}
