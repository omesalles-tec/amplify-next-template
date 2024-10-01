"use client";

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure(outputs);

export default function Page() {
  return (
      <main>
        <h1>Another page - to make it private I have to wrap it in an Authenticator + the internationalization</h1>
      </main>
      )
}
