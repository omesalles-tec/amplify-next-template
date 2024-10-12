"use client";

import "@aws-amplify/ui-react/styles.css";
import "@/app/app.css";
import "@cloudscape-design/global-styles/index.css";
import Logout from "@/app/components/Logout";
import ShellLayout from "@/app/components/ShellLayout";

export default function App() {
  return (
    <ShellLayout newPathname="/" breadcrumbs={[]}>
      <div>Home</div>
      <Logout />
    </ShellLayout>
  );
}
