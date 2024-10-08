/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Household = {
  __typename: "Household",
  createdAt: string,
  householdName: string,
  id: string,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  createdAt: string,
  email: string,
  householdID?: string | null,
  householdName?: string | null,
  id: string,
  owner?: string | null,
  updatedAt: string,
};

export type ModelHouseholdFilterInput = {
  and?: Array< ModelHouseholdFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  householdName?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelHouseholdFilterInput | null,
  or?: Array< ModelHouseholdFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelHouseholdConnection = {
  __typename: "ModelHouseholdConnection",
  items:  Array<Household | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  and?: Array< ModelUserFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  householdID?: ModelIDInput | null,
  householdName?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelUserFilterInput | null,
  or?: Array< ModelUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelHouseholdConditionInput = {
  and?: Array< ModelHouseholdConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  householdName?: ModelStringInput | null,
  not?: ModelHouseholdConditionInput | null,
  or?: Array< ModelHouseholdConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateHouseholdInput = {
  householdName: string,
  id?: string | null,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  householdID?: ModelIDInput | null,
  householdName?: ModelStringInput | null,
  not?: ModelUserConditionInput | null,
  or?: Array< ModelUserConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateUserInput = {
  email: string,
  householdID?: string | null,
  householdName?: string | null,
  id?: string | null,
};

export type DeleteHouseholdInput = {
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type UpdateHouseholdInput = {
  householdName?: string | null,
  id: string,
};

export type UpdateUserInput = {
  email?: string | null,
  householdID?: string | null,
  householdName?: string | null,
  id: string,
};

export type ModelSubscriptionHouseholdFilterInput = {
  and?: Array< ModelSubscriptionHouseholdFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  householdName?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionHouseholdFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  householdID?: ModelStringInput | null,
  householdName?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GetHouseholdQueryVariables = {
  id: string,
};

export type GetHouseholdQuery = {
  getHousehold?:  {
    __typename: "Household",
    createdAt: string,
    householdName: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    householdID?: string | null,
    householdName?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type ListHouseholdsQueryVariables = {
  filter?: ModelHouseholdFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHouseholdsQuery = {
  listHouseholds?:  {
    __typename: "ModelHouseholdConnection",
    items:  Array< {
      __typename: "Household",
      createdAt: string,
      householdName: string,
      id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      createdAt: string,
      email: string,
      householdID?: string | null,
      householdName?: string | null,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateHouseholdMutationVariables = {
  condition?: ModelHouseholdConditionInput | null,
  input: CreateHouseholdInput,
};

export type CreateHouseholdMutation = {
  createHousehold?:  {
    __typename: "Household",
    createdAt: string,
    householdName: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    householdID?: string | null,
    householdName?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteHouseholdMutationVariables = {
  condition?: ModelHouseholdConditionInput | null,
  input: DeleteHouseholdInput,
};

export type DeleteHouseholdMutation = {
  deleteHousehold?:  {
    __typename: "Household",
    createdAt: string,
    householdName: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    householdID?: string | null,
    householdName?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateHouseholdMutationVariables = {
  condition?: ModelHouseholdConditionInput | null,
  input: UpdateHouseholdInput,
};

export type UpdateHouseholdMutation = {
  updateHousehold?:  {
    __typename: "Household",
    createdAt: string,
    householdName: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    householdID?: string | null,
    householdName?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateHouseholdSubscriptionVariables = {
  filter?: ModelSubscriptionHouseholdFilterInput | null,
};

export type OnCreateHouseholdSubscription = {
  onCreateHousehold?:  {
    __typename: "Household",
    createdAt: string,
    householdName: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  householdID?: string | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    householdID?: string | null,
    householdName?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteHouseholdSubscriptionVariables = {
  filter?: ModelSubscriptionHouseholdFilterInput | null,
};

export type OnDeleteHouseholdSubscription = {
  onDeleteHousehold?:  {
    __typename: "Household",
    createdAt: string,
    householdName: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  householdID?: string | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    householdID?: string | null,
    householdName?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateHouseholdSubscriptionVariables = {
  filter?: ModelSubscriptionHouseholdFilterInput | null,
};

export type OnUpdateHouseholdSubscription = {
  onUpdateHousehold?:  {
    __typename: "Household",
    createdAt: string,
    householdName: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  householdID?: string | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    householdID?: string | null,
    householdName?: string | null,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};
