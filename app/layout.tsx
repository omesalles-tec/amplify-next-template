"use client";

import React from "react";
import {
  AppLayout,
  BreadcrumbGroup,
  Container,
  ContentLayout,
  Flashbar,
  Header,
  HelpPanel,
  Link,
  SideNavigation,
} from "@cloudscape-design/components";
import { I18nProvider } from "@cloudscape-design/components/i18n";
import messages from "@cloudscape-design/components/i18n/messages/all.en";

const LOCALE = "en";

import { Inter } from "next/font/google";
import "./app.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <I18nProvider locale={LOCALE} messages={[messages]}>
          <AppLayout
            breadcrumbs={
              <BreadcrumbGroup
                items={[
                  { text: "Home", href: "#" },
                  { text: "Service", href: "#" },
                ]}
              />
            }
            navigationOpen={true}
            navigation={
              <SideNavigation
                header={{
                  href: "#",
                  text: "Service name",
                }}
                items={[{ type: "link", text: `Page #1`, href: `#` }]}
              />
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
            toolsOpen={true}
            tools={
              <HelpPanel header={<h2>Overview</h2>}>Help content</HelpPanel>
            }
            content={children}
          />
        </I18nProvider>
      </body>
    </html>
  );
}
