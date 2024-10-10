"use client";

import Link from "next/link";
import React from "react";
import {
  AppLayout,
  BreadcrumbGroup,
  Flashbar,
  SideNavigation,
} from "@cloudscape-design/components";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
Amplify.configure(outputs, {
  ssr: true,
});

//import { Inter } from "next/font/google";
import "@/app/app.css";
import "@aws-amplify/ui-react/styles.css";
import "@cloudscape-design/global-styles/index.css";

//const inter = Inter({ subsets: ["latin"] });

const clientLayout = ({
  children,
  newPathname,
  breadcrumbs,
}: {
  children: React.ReactNode;
  newPathname: string;
  breadcrumbs: any;
}) => {
  const router = useRouter();
  async function handleSignOut() {
    await signOut();
    router.push('/sign-in');
  }

  return (
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
            items={[
              {type: "link", text: "Household", href: `${newPathname}/household`},
              <Link href={`${newPathname}/ingredients`}>Ingredients</Link>,
              { type: "link", text: "Stock", href: `${newPathname}/stock` },
              { type: "link", text: "Menus", href: `${newPathname}/menus` },
              { type: "link", text: "Recipes", href: `${newPathname}/recipes` },
              { type: "link", text: "Shopping List", href: `${newPathname}/shopping-list`},
              { type: "link", text: "Supermarkets", href: `${newPathname}/supermarkets`},
              { type: "link", text: "Discounts", href: `${newPathname}/discounts`},
            ]}
          />
          <button type="button" onClick={handleSignOut}>
            Sign out
          </button>
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
  );
};

export default clientLayout;
