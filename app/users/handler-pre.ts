import type { PreAuthenticationTriggerHandler } from "aws-lambda"
import { Amplify } from "aws-amplify";
import outputs from "../../../amplify_outputs.json";
import { type Schema } from "../../data/resource";
import { env } from "$amplify/env/post-confirmation";
import { generateClient } from "aws-amplify/api"
import { listUsers } from "../graphql/queries"
import { ListUsersQueryVariables } from "../graphql/API"

Amplify.configure(outputs);

const client = generateClient<Schema>({
  authMode: "apiKey",
});

export const handler: PreAuthenticationTriggerHandler = async (event) => {
  const householdName = event.request.validationData?.["custom:householdName"];
  const email = event.request.validationData?.["email"];

  if (!householdName) {
    throw new Error("You must indicate a household name");
  }

  try {
    const variables: ListUsersQueryVariables = {
      filter: {
        or: [
          { email: { eq: email } },
          { householdName: { eq: householdName } }
        ]
      }
    }

    const result = await client.graphql({
      query: listUsers,
      variables: variables
    })
    if (result.data.listUsers.items.length === 0) {
      throw new Error("Email or household don't exists")
    }

    return event
  } catch (error) {
    console.error('Error checking user existence:', error)
    throw error
  }
}