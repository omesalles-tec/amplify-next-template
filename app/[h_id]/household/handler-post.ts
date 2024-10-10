import type { PostConfirmationTriggerHandler } from "aws-lambda";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
/*
import { createUser, createHousehold } from "../graphql/mutations";
import { listHouseholds } from "$amplify/graphql/queries";
import { env } from "process";

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT,
        region: env.AWS_REGION,
        defaultAuthMode: "iam",
      },
    },
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* noop *//*
        },
      },
    },
  }
)

const client = generateClient<Schema>({
  authMode: "iam",
});

export const handler: PostConfirmationTriggerHandler = async (event) => {
  try {
    const {
      userName,
      request: { userAttributes },
    } = event;

    const householdName = userAttributes["custom:householdName"] || null;
    let householdID: string | null = null;

    // Check if the household already exists
    if (householdName) {
      const listHouseholdsResult = await client.graphql({
        query: listHouseholds,
        variables: {
          filter: {
            householdName: {
              eq: householdName,
            },
          },
        },
      });

      const existingHousehold =
        listHouseholdsResult.data.listHouseholds?.items[0];

      if (existingHousehold) {
        householdID = existingHousehold.id;
      } else {
        // Create a new household if it doesn't exist
        const createHouseholdResult = await client.graphql({
          query: createHousehold,
          variables: {
            input: {
              householdName: householdName,
            },
          },
        });

        householdID = createHouseholdResult.data.createHousehold?.id || null;
      }
    }
    // Create a new user with the householdID
    await client.graphql({
      query: createUser,
      variables: {
        input: {
          email: event.request.userAttributes.email,
          householdID: householdID,
          householdName: householdName,
        },
      },
    });

  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
  return event;
};
*/