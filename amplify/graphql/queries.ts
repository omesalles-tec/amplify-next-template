/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getHousehold = /* GraphQL */ `query GetHousehold($id: ID!) {
  getHousehold(id: $id) {
    createdAt
    householdName
    id
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetHouseholdQueryVariables,
  APITypes.GetHouseholdQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    createdAt
    email
    householdID
    householdName
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listHouseholds = /* GraphQL */ `query ListHouseholds(
  $filter: ModelHouseholdFilterInput
  $limit: Int
  $nextToken: String
) {
  listHouseholds(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      householdName
      id
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListHouseholdsQueryVariables,
  APITypes.ListHouseholdsQuery
>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      email
      householdID
      householdName
      id
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
