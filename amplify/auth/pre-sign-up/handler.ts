import type { PreSignUpTriggerHandler } from "aws-lambda"

export const handler: PreSignUpTriggerHandler = async (event) => {
  if (!event.request.userAttributes["custom:household"]) {
    throw new Error("You must indicate a household name")
  }

  return event
}