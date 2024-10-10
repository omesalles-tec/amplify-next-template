"use client";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import "@/app/app.css";
import "@cloudscape-design/global-styles/index.css";
import SignIn from "./sign-in/page";
Amplify.configure(outputs,
  {
    ssr: true
  }
);

export default function App() {
  return (<SignIn />);
}
