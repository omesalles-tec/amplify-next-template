import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { postConfirmation } from "../auth/post-confirmation/resource";
import { preTokenGeneration } from "../auth/pre-token-generation/resource";
/*== STEP 1 ===============================================================
The section below creates a User database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "User" records.
=========================================================================*/
const schema = a
  .schema({
    User: a
      .model({
        email: a.string().required(),
        householdID: a.id(),
        householdName: a.string(),
        //household: a.belongsTo("Household", "householdID"),
      })
      .authorization((allow) => [
        allow.ownerDefinedIn("householdID"),
        allow.owner().to(["read", "delete"]),
        //allow.publicApiKey()
      ]),
    Household: a.model({
        /*id: a.id().required(),*/
        householdName: a.string().required(),
        //members: a.hasMany("User", "householdID"),
      })
      .authorization((allow) => [allow.publicApiKey().to(['read']),
    allow.owner()]),
  })
  .authorization((allow) => [allow.resource(postConfirmation), 
    allow.resource(preTokenGeneration)]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: User } = await client.models.User.list()

// return <ul>{User.map(User => <li key={User.id}>{User.content}</li>)}</ul>
