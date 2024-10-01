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
    "App successfully hosted":
      "La App sea ha instalado exitosamente. Intenta crear un nuevo todo",
    "Review next steps of this tutorial":
      "Revisa los siguientes pasos de este tutorial",
    "Todo content": "El contenido del todo",
    new: "nuevo",
  },
});

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

  return (
    <I18nProvider locale={LOCALE} messages={[messages]}>
      <main>
        <h1>My todos</h1>
        <button onClick={createTodo}>+ new</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.content}</li>
          ))}
        </ul>
        <div>
          🥳 App successfully hosted. Try creating a new todo.
          <br />
          <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
            Review next steps of this tutorial.
          </a>
        </div>
      </main>
    </I18nProvider>
  );
}
