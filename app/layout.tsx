"use client";
import "@aws-amplify/ui-react/styles.css";
import "./globals.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import React from "react";
import { Authenticator, View } from "@aws-amplify/ui-react";
import "@cloudscape-design/global-styles/index.css"; // Import Cloudscape global styles

Amplify.configure(outputs, { ssr: true });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
        <Authenticator.Provider>
          <View>{children}</View>
        </Authenticator.Provider>
      </body>
    </html>
  );
}
