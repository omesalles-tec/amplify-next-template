import type { PostConfirmationTriggerHandler } from "aws-lambda";


export const handler: PostConfirmationTriggerHandler = async (event) => {
  const {
    userName,
    request: { userAttributes },
  } = event;

  return event;
};