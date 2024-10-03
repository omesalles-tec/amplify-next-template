import { defineAuth } from "@aws-amplify/backend";
import { preSignUp } from './pre-sign-up/resource';
import { preAuthentication } from './pre-authentication/resource';
import { postConfirmation } from "./post-confirmation/resource"

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
     
  userAttributes: {      
    "custom:householdName": {
      dataType: "String",
      mutable: false,
      maxLen: 24,
      minLen: 8,
    },
  },
  triggers: {
    postConfirmation,
    preSignUp,
    preAuthentication,
  }
});