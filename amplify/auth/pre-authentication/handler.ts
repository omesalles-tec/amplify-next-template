import type { PreAuthenticationTriggerHandler } from "aws-lambda"
import { generateClient } from "aws-amplify/api"
import { listUsers } from "../graphql/queries"
import { ListUsersQueryVariables } from "../graphql/API"

const client = generateClient()

export const handler: PreAuthenticationTriggerHandler = async (event) => {
  if (!event.request.userAttributes["custom:householdName"]) {
    throw new Error("You must indicate a household name")
  }

  const { email } = event.request.userAttributes
  const householdName = event.request.userAttributes["custom:householdName"]

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

    if (result.data.listUsers.items.length > 0) {
      throw new Error("Email or household name already exists")
    }

    return event
  } catch (error) {
    console.error('Error checking user existence:', error)
    throw error
  }
}