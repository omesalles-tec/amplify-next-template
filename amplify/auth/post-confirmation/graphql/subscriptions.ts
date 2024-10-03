/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateHousehold = /* GraphQL */ `subscription OnCreateHousehold($filter: ModelSubscriptionHouseholdFilterInput) {
  onCreateHousehold(filter: $filter) {
    createdAt
    householdName
    id
    members {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateHouseholdSubscriptionVariables,
  APITypes.OnCreateHouseholdSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $householdID: String
  $owner: String
) {
  onCreateUser(filter: $filter, householdID: $householdID, owner: $owner) {
    createdAt
    email
    household {
      createdAt
      householdName
      id
      updatedAt
      __typename
    }
    householdID
    householdName
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onDeleteHousehold = /* GraphQL */ `subscription OnDeleteHousehold($filter: ModelSubscriptionHouseholdFilterInput) {
  onDeleteHousehold(filter: $filter) {
    createdAt
    householdName
    id
    members {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteHouseholdSubscriptionVariables,
  APITypes.OnDeleteHouseholdSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $householdID: String
  $owner: String
) {
  onDeleteUser(filter: $filter, householdID: $householdID, owner: $owner) {
    createdAt
    email
    household {
      createdAt
      householdName
      id
      updatedAt
      __typename
    }
    householdID
    householdName
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onUpdateHousehold = /* GraphQL */ `subscription OnUpdateHousehold($filter: ModelSubscriptionHouseholdFilterInput) {
  onUpdateHousehold(filter: $filter) {
    createdAt
    householdName
    id
    members {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateHouseholdSubscriptionVariables,
  APITypes.OnUpdateHouseholdSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $householdID: String
  $owner: String
) {
  onUpdateUser(filter: $filter, householdID: $householdID, owner: $owner) {
    createdAt
    email
    household {
      createdAt
      householdName
      id
      updatedAt
      __typename
    }
    householdID
    householdName
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
