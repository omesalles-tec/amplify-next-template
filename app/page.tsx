"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import messages from "@cloudscape-design/components/i18n/messages/all.en";
import { I18n } from "aws-amplify/utils";
import { I18nProvider } from "@cloudscape-design/components/i18n";
import { translations } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./../app/app.css";
import "@cloudscape-design/global-styles/index.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

const LOCALE = "en";
I18n.putVocabularies(translations);
I18n.setLanguage("es");
I18n.putVocabularies({
  es: {
    "Household members":
      "Miembros de la casa",
  },
});

export default function App() {
  const [Users, setUsers] = useState<Array<Schema["User"]["type"]>>([]);

  function listUsers() {
    client.models.User.observeQuery().subscribe({
      next: (data) => setUsers([...data.items]),
    });
  }

  useEffect(() => {
    listUsers();
  }, []);

  return (
    <I18nProvider locale={LOCALE} messages={[messages]}>
      <main>
        <h1>Household members</h1>
        <ul>
          {Users.map((User) => (
            <li key={User.id}>{User.email}</li>
          ))}
        </ul>
      </main>
    </I18nProvider>
  );
}
