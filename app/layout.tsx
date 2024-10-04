"use client";

import React from "react";
import {
  AppLayout,
  BreadcrumbGroup,
  Flashbar,
  SideNavigation,
} from "@cloudscape-design/components";
import { I18nProvider } from "@cloudscape-design/components/i18n";
import messages from "@cloudscape-design/components/i18n/messages/all.en";
import { usePathname } from "next/navigation";
import { I18n } from "aws-amplify/utils";
import { Authenticator, translations } from "@aws-amplify/ui-react";

//import { Inter } from "next/font/google";
import "./app.css";
import "@aws-amplify/ui-react/styles.css";
import "@cloudscape-design/global-styles/index.css";


//const inter = Inter({ subsets: ["latin"] });

const LOCALE = "en";
I18n.putVocabularies(translations);
I18n.setLanguage("es");
I18n.putVocabularies({
  es: {
    Household: "Familia",
    "Household name": "Nombre de la familia",
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const breadcrumbs = pathname
    .split("/")
    .filter(Boolean)
    .map((path, index, arr) => ({
      text: path.charAt(0).toUpperCase() + path.slice(1),
      href: "/" + arr.slice(0, index + 1).join("/"),
    }));


  return (
    <html lang="en">
      <body >{/*className={inter.className}>*/}
        <Authenticator>
          {({ signOut, user }) => (
            <I18nProvider locale={LOCALE} messages={[messages]}>
              <AppLayout
                breadcrumbs={
                  <BreadcrumbGroup
                    items={[{ text: "Home", href: "/" }, ...breadcrumbs]}
                  />
                }
                navigationOpen={true}
                navigation={
                  <>
                    <SideNavigation
                      header={{
                        href: "#",
                        text: "Service name",
                      }}
                      items={[{ type: "link", text: `Page #1`, href: `#` }]}
                    />
                    <button onClick={signOut}>Sign out</button>
                  </>
                }
                notifications={
                  <Flashbar
                    items={[
                      {
                        type: "info",
                        dismissible: true,
                        content: "This is an info flash message.",
                        id: "message_1",
                      },
                    ]}
                  />
                }
                toolsOpen={false}
                content={children}
              />
            </I18nProvider>
          )}
        </Authenticator>
      </body>
    </html>
  );
}
