/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateProjectInput = {
  id?: string | null,
  title: string,
  logoUrl: string,
  description: string,
  createdAt?: number | null,
  projectOwnerUserId?: string | null,
};

export type ModelProjectConditionInput = {
  title?: ModelStringInput | null,
  logoUrl?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelIntInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateProjectInput = {
  id: string,
  title?: string | null,
  logoUrl?: string | null,
  description?: string | null,
  createdAt?: number | null,
  projectOwnerUserId?: string | null,
};

export type DeleteProjectInput = {
  id?: string | null,
};

export type CreateBoardInput = {
  id?: string | null,
  title: string,
  description: string,
  createdAt?: number | null,
  boardProjectId?: string | null,
};

export type ModelBoardConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelIntInput | null,
  and?: Array< ModelBoardConditionInput | null > | null,
  or?: Array< ModelBoardConditionInput | null > | null,
  not?: ModelBoardConditionInput | null,
};

export type UpdateBoardInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  createdAt?: number | null,
  boardProjectId?: string | null,
};

export type DeleteBoardInput = {
  id?: string | null,
};

export type CreateColumnInput = {
  id?: string | null,
  title: string,
  order?: number | null,
  color: string,
  createdAt?: number | null,
  columnBoardId?: string | null,
};

export type ModelColumnConditionInput = {
  title?: ModelStringInput | null,
  order?: ModelIntInput | null,
  color?: ModelStringInput | null,
  createdAt?: ModelIntInput | null,
  and?: Array< ModelColumnConditionInput | null > | null,
  or?: Array< ModelColumnConditionInput | null > | null,
  not?: ModelColumnConditionInput | null,
};

export type UpdateColumnInput = {
  id: string,
  title?: string | null,
  order?: number | null,
  color?: string | null,
  createdAt?: number | null,
  columnBoardId?: string | null,
};

export type DeleteColumnInput = {
  id?: string | null,
};

export type CreateCardInput = {
  id?: string | null,
  content: string,
  isAnonymous: boolean,
  createdAt?: number | null,
  updatedAt?: number | null,
  cardColumnId?: string | null,
  cardOwnerUserId?: string | null,
};

export type ModelCardConditionInput = {
  content?: ModelStringInput | null,
  isAnonymous?: ModelBooleanInput | null,
  createdAt?: ModelIntInput | null,
  updatedAt?: ModelIntInput | null,
  and?: Array< ModelCardConditionInput | null > | null,
  or?: Array< ModelCardConditionInput | null > | null,
  not?: ModelCardConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCardInput = {
  id: string,
  content?: string | null,
  isAnonymous?: boolean | null,
  createdAt?: number | null,
  updatedAt?: number | null,
  cardColumnId?: string | null,
  cardOwnerUserId?: string | null,
};

export type DeleteCardInput = {
  id?: string | null,
};

export type CreateLikeInput = {
  id?: string | null,
  createdAt?: number | null,
  likeCardId?: string | null,
  likeUserId?: string | null,
};

export type ModelLikeConditionInput = {
  createdAt?: ModelIntInput | null,
  and?: Array< ModelLikeConditionInput | null > | null,
  or?: Array< ModelLikeConditionInput | null > | null,
  not?: ModelLikeConditionInput | null,
};

export type UpdateLikeInput = {
  id: string,
  createdAt?: number | null,
  likeCardId?: string | null,
  likeUserId?: string | null,
};

export type DeleteLikeInput = {
  id?: string | null,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
  username: string,
  picture?: string | null,
  createdAt?: number | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  createdAt?: ModelIntInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  username?: string | null,
  picture?: string | null,
  createdAt?: number | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateProjectUsersInput = {
  id?: string | null,
  projectUsersUserId?: string | null,
  projectUsersProjectId?: string | null,
};

export type ModelProjectUsersConditionInput = {
  and?: Array< ModelProjectUsersConditionInput | null > | null,
  or?: Array< ModelProjectUsersConditionInput | null > | null,
  not?: ModelProjectUsersConditionInput | null,
};

export type UpdateProjectUsersInput = {
  id: string,
  projectUsersUserId?: string | null,
  projectUsersProjectId?: string | null,
};

export type DeleteProjectUsersInput = {
  id?: string | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  logoUrl?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelIntInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBoardFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelIntInput | null,
  and?: Array< ModelBoardFilterInput | null > | null,
  or?: Array< ModelBoardFilterInput | null > | null,
  not?: ModelBoardFilterInput | null,
};

export type ModelColumnFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  order?: ModelIntInput | null,
  color?: ModelStringInput | null,
  createdAt?: ModelIntInput | null,
  and?: Array< ModelColumnFilterInput | null > | null,
  or?: Array< ModelColumnFilterInput | null > | null,
  not?: ModelColumnFilterInput | null,
};

export type ModelCardFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  isAnonymous?: ModelBooleanInput | null,
  createdAt?: ModelIntInput | null,
  updatedAt?: ModelIntInput | null,
  and?: Array< ModelCardFilterInput | null > | null,
  or?: Array< ModelCardFilterInput | null > | null,
  not?: ModelCardFilterInput | null,
};

export type ModelLikeFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelIntInput | null,
  and?: Array< ModelLikeFilterInput | null > | null,
  or?: Array< ModelLikeFilterInput | null > | null,
  not?: ModelLikeFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  createdAt?: ModelIntInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type AddBoardMutationVariables = {
  limit?: number | null,
  start?: number | null,
};

export type AddBoardMutation = {
  addBoard:  {
    __typename: "Board",
    id: string,
    title: string,
    description: string,
    columns:  {
      __typename: "ModelColumnConnection",
      items:  Array< {
        __typename: "Column",
        id: string,
        title: string,
        order: number | null,
        color: string,
        createdAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      logoUrl: string,
      description: string,
      boards:  {
        __typename: "ModelBoardConnection",
        nextToken: string | null,
      } | null,
      users:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      ownerUser:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        picture: string | null,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject:  {
    __typename: "Project",
    id: string,
    title: string,
    logoUrl: string,
    description: string,
    boards:  {
      __typename: "ModelBoardConnection",
      items:  Array< {
        __typename: "Board",
        id: string,
        title: string,
        description: string,
        createdAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    users:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ownerUser:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject:  {
    __typename: "Project",
    id: string,
    title: string,
    logoUrl: string,
    description: string,
    boards:  {
      __typename: "ModelBoardConnection",
      items:  Array< {
        __typename: "Board",
        id: string,
        title: string,
        description: string,
        createdAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    users:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ownerUser:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject:  {
    __typename: "Project",
    id: string,
    title: string,
    logoUrl: string,
    description: string,
    boards:  {
      __typename: "ModelBoardConnection",
      items:  Array< {
        __typename: "Board",
        id: string,
        title: string,
        description: string,
        createdAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    users:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ownerUser:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type CreateBoardMutationVariables = {
  input: CreateBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type CreateBoardMutation = {
  createBoard:  {
    __typename: "Board",
    id: string,
    title: string,
    description: string,
    columns:  {
      __typename: "ModelColumnConnection",
      items:  Array< {
        __typename: "Column",
        id: string,
        title: string,
        order: number | null,
        color: string,
        createdAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      logoUrl: string,
      description: string,
      boards:  {
        __typename: "ModelBoardConnection",
        nextToken: string | null,
      } | null,
      users:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      ownerUser:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        picture: string | null,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type UpdateBoardMutationVariables = {
  input: UpdateBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type UpdateBoardMutation = {
  updateBoard:  {
    __typename: "Board",
    id: string,
    title: string,
    description: string,
    columns:  {
      __typename: "ModelColumnConnection",
      items:  Array< {
        __typename: "Column",
        id: string,
        title: string,
        order: number | null,
        color: string,
        createdAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      logoUrl: string,
      description: string,
      boards:  {
        __typename: "ModelBoardConnection",
        nextToken: string | null,
      } | null,
      users:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      ownerUser:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        picture: string | null,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type DeleteBoardMutationVariables = {
  input: DeleteBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type DeleteBoardMutation = {
  deleteBoard:  {
    __typename: "Board",
    id: string,
    title: string,
    description: string,
    columns:  {
      __typename: "ModelColumnConnection",
      items:  Array< {
        __typename: "Column",
        id: string,
        title: string,
        order: number | null,
        color: string,
        createdAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      logoUrl: string,
      description: string,
      boards:  {
        __typename: "ModelBoardConnection",
        nextToken: string | null,
      } | null,
      users:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      ownerUser:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        picture: string | null,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type CreateColumnMutationVariables = {
  input: CreateColumnInput,
  condition?: ModelColumnConditionInput | null,
};

export type CreateColumnMutation = {
  createColumn:  {
    __typename: "Column",
    id: string,
    title: string,
    order: number | null,
    color: string,
    board:  {
      __typename: "Board",
      id: string,
      title: string,
      description: string,
      columns:  {
        __typename: "ModelColumnConnection",
        nextToken: string | null,
      } | null,
      project:  {
        __typename: "Project",
        id: string,
        title: string,
        logoUrl: string,
        description: string,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
    } | null,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        content: string,
        isAnonymous: boolean,
        createdAt: number | null,
        updatedAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type UpdateColumnMutationVariables = {
  input: UpdateColumnInput,
  condition?: ModelColumnConditionInput | null,
};

export type UpdateColumnMutation = {
  updateColumn:  {
    __typename: "Column",
    id: string,
    title: string,
    order: number | null,
    color: string,
    board:  {
      __typename: "Board",
      id: string,
      title: string,
      description: string,
      columns:  {
        __typename: "ModelColumnConnection",
        nextToken: string | null,
      } | null,
      project:  {
        __typename: "Project",
        id: string,
        title: string,
        logoUrl: string,
        description: string,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
    } | null,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        content: string,
        isAnonymous: boolean,
        createdAt: number | null,
        updatedAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type DeleteColumnMutationVariables = {
  input: DeleteColumnInput,
  condition?: ModelColumnConditionInput | null,
};

export type DeleteColumnMutation = {
  deleteColumn:  {
    __typename: "Column",
    id: string,
    title: string,
    order: number | null,
    color: string,
    board:  {
      __typename: "Board",
      id: string,
      title: string,
      description: string,
      columns:  {
        __typename: "ModelColumnConnection",
        nextToken: string | null,
      } | null,
      project:  {
        __typename: "Project",
        id: string,
        title: string,
        logoUrl: string,
        description: string,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
    } | null,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        content: string,
        isAnonymous: boolean,
        createdAt: number | null,
        updatedAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type CreateCardMutationVariables = {
  input: CreateCardInput,
  condition?: ModelCardConditionInput | null,
};

export type CreateCardMutation = {
  createCard:  {
    __typename: "Card",
    id: string,
    content: string,
    isAnonymous: boolean,
    column:  {
      __typename: "Column",
      id: string,
      title: string,
      order: number | null,
      color: string,
      board:  {
        __typename: "Board",
        id: string,
        title: string,
        description: string,
        createdAt: number | null,
      } | null,
      cards:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    likes:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        createdAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ownerUser:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
    updatedAt: number | null,
  } | null,
};

export type UpdateCardMutationVariables = {
  input: UpdateCardInput,
  condition?: ModelCardConditionInput | null,
};

export type UpdateCardMutation = {
  updateCard:  {
    __typename: "Card",
    id: string,
    content: string,
    isAnonymous: boolean,
    column:  {
      __typename: "Column",
      id: string,
      title: string,
      order: number | null,
      color: string,
      board:  {
        __typename: "Board",
        id: string,
        title: string,
        description: string,
        createdAt: number | null,
      } | null,
      cards:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    likes:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        createdAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ownerUser:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
    updatedAt: number | null,
  } | null,
};

export type DeleteCardMutationVariables = {
  input: DeleteCardInput,
  condition?: ModelCardConditionInput | null,
};

export type DeleteCardMutation = {
  deleteCard:  {
    __typename: "Card",
    id: string,
    content: string,
    isAnonymous: boolean,
    column:  {
      __typename: "Column",
      id: string,
      title: string,
      order: number | null,
      color: string,
      board:  {
        __typename: "Board",
        id: string,
        title: string,
        description: string,
        createdAt: number | null,
      } | null,
      cards:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    likes:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        createdAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ownerUser:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
    updatedAt: number | null,
  } | null,
};

export type CreateLikeMutationVariables = {
  input: CreateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type CreateLikeMutation = {
  createLike:  {
    __typename: "Like",
    id: string,
    card:  {
      __typename: "Card",
      id: string,
      content: string,
      isAnonymous: boolean,
      column:  {
        __typename: "Column",
        id: string,
        title: string,
        order: number | null,
        color: string,
        createdAt: number | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      ownerUser:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        picture: string | null,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
      updatedAt: number | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type UpdateLikeMutationVariables = {
  input: UpdateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type UpdateLikeMutation = {
  updateLike:  {
    __typename: "Like",
    id: string,
    card:  {
      __typename: "Card",
      id: string,
      content: string,
      isAnonymous: boolean,
      column:  {
        __typename: "Column",
        id: string,
        title: string,
        order: number | null,
        color: string,
        createdAt: number | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      ownerUser:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        picture: string | null,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
      updatedAt: number | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type DeleteLikeMutationVariables = {
  input: DeleteLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type DeleteLikeMutation = {
  deleteLike:  {
    __typename: "Like",
    id: string,
    card:  {
      __typename: "Card",
      id: string,
      content: string,
      isAnonymous: boolean,
      column:  {
        __typename: "Column",
        id: string,
        title: string,
        order: number | null,
        color: string,
        createdAt: number | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      ownerUser:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        picture: string | null,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
      updatedAt: number | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    username: string,
    picture: string | null,
    projects:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    username: string,
    picture: string | null,
    projects:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    username: string,
    picture: string | null,
    projects:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type CreateProjectUsersMutationVariables = {
  input: CreateProjectUsersInput,
  condition?: ModelProjectUsersConditionInput | null,
};

export type CreateProjectUsersMutation = {
  createProjectUsers:  {
    __typename: "ProjectUsers",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      logoUrl: string,
      description: string,
      boards:  {
        __typename: "ModelBoardConnection",
        nextToken: string | null,
      } | null,
      users:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      ownerUser:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        picture: string | null,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
    } | null,
  } | null,
};

export type UpdateProjectUsersMutationVariables = {
  input: UpdateProjectUsersInput,
  condition?: ModelProjectUsersConditionInput | null,
};

export type UpdateProjectUsersMutation = {
  updateProjectUsers:  {
    __typename: "ProjectUsers",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      logoUrl: string,
      description: string,
      boards:  {
        __typename: "ModelBoardConnection",
        nextToken: string | null,
      } | null,
      users:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      ownerUser:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        picture: string | null,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
    } | null,
  } | null,
};

export type DeleteProjectUsersMutationVariables = {
  input: DeleteProjectUsersInput,
  condition?: ModelProjectUsersConditionInput | null,
};

export type DeleteProjectUsersMutation = {
  deleteProjectUsers:  {
    __typename: "ProjectUsers",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      logoUrl: string,
      description: string,
      boards:  {
        __typename: "ModelBoardConnection",
        nextToken: string | null,
      } | null,
      users:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      ownerUser:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        picture: string | null,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
    } | null,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject:  {
    __typename: "Project",
    id: string,
    title: string,
    logoUrl: string,
    description: string,
    boards:  {
      __typename: "ModelBoardConnection",
      items:  Array< {
        __typename: "Board",
        id: string,
        title: string,
        description: string,
        createdAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    users:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ownerUser:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      title: string,
      logoUrl: string,
      description: string,
      boards:  {
        __typename: "ModelBoardConnection",
        nextToken: string | null,
      } | null,
      users:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      ownerUser:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        picture: string | null,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetBoardQueryVariables = {
  id: string,
};

export type GetBoardQuery = {
  getBoard:  {
    __typename: "Board",
    id: string,
    title: string,
    description: string,
    columns:  {
      __typename: "ModelColumnConnection",
      items:  Array< {
        __typename: "Column",
        id: string,
        title: string,
        order: number | null,
        color: string,
        createdAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      logoUrl: string,
      description: string,
      boards:  {
        __typename: "ModelBoardConnection",
        nextToken: string | null,
      } | null,
      users:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      ownerUser:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        picture: string | null,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type ListBoardsQueryVariables = {
  filter?: ModelBoardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBoardsQuery = {
  listBoards:  {
    __typename: "ModelBoardConnection",
    items:  Array< {
      __typename: "Board",
      id: string,
      title: string,
      description: string,
      columns:  {
        __typename: "ModelColumnConnection",
        nextToken: string | null,
      } | null,
      project:  {
        __typename: "Project",
        id: string,
        title: string,
        logoUrl: string,
        description: string,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetColumnQueryVariables = {
  id: string,
};

export type GetColumnQuery = {
  getColumn:  {
    __typename: "Column",
    id: string,
    title: string,
    order: number | null,
    color: string,
    board:  {
      __typename: "Board",
      id: string,
      title: string,
      description: string,
      columns:  {
        __typename: "ModelColumnConnection",
        nextToken: string | null,
      } | null,
      project:  {
        __typename: "Project",
        id: string,
        title: string,
        logoUrl: string,
        description: string,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
    } | null,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        content: string,
        isAnonymous: boolean,
        createdAt: number | null,
        updatedAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type ListColumnsQueryVariables = {
  filter?: ModelColumnFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListColumnsQuery = {
  listColumns:  {
    __typename: "ModelColumnConnection",
    items:  Array< {
      __typename: "Column",
      id: string,
      title: string,
      order: number | null,
      color: string,
      board:  {
        __typename: "Board",
        id: string,
        title: string,
        description: string,
        createdAt: number | null,
      } | null,
      cards:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCardQueryVariables = {
  id: string,
};

export type GetCardQuery = {
  getCard:  {
    __typename: "Card",
    id: string,
    content: string,
    isAnonymous: boolean,
    column:  {
      __typename: "Column",
      id: string,
      title: string,
      order: number | null,
      color: string,
      board:  {
        __typename: "Board",
        id: string,
        title: string,
        description: string,
        createdAt: number | null,
      } | null,
      cards:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    likes:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        createdAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ownerUser:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
    updatedAt: number | null,
  } | null,
};

export type ListCardsQueryVariables = {
  filter?: ModelCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCardsQuery = {
  listCards:  {
    __typename: "ModelCardConnection",
    items:  Array< {
      __typename: "Card",
      id: string,
      content: string,
      isAnonymous: boolean,
      column:  {
        __typename: "Column",
        id: string,
        title: string,
        order: number | null,
        color: string,
        createdAt: number | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      ownerUser:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        picture: string | null,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
      updatedAt: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetLikeQueryVariables = {
  id: string,
};

export type GetLikeQuery = {
  getLike:  {
    __typename: "Like",
    id: string,
    card:  {
      __typename: "Card",
      id: string,
      content: string,
      isAnonymous: boolean,
      column:  {
        __typename: "Column",
        id: string,
        title: string,
        order: number | null,
        color: string,
        createdAt: number | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      ownerUser:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        picture: string | null,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
      updatedAt: number | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type ListLikesQueryVariables = {
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikesQuery = {
  listLikes:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      id: string,
      card:  {
        __typename: "Card",
        id: string,
        content: string,
        isAnonymous: boolean,
        createdAt: number | null,
        updatedAt: number | null,
      } | null,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        picture: string | null,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    username: string,
    picture: string | null,
    projects:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject:  {
    __typename: "Project",
    id: string,
    title: string,
    logoUrl: string,
    description: string,
    boards:  {
      __typename: "ModelBoardConnection",
      items:  Array< {
        __typename: "Board",
        id: string,
        title: string,
        description: string,
        createdAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    users:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ownerUser:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject:  {
    __typename: "Project",
    id: string,
    title: string,
    logoUrl: string,
    description: string,
    boards:  {
      __typename: "ModelBoardConnection",
      items:  Array< {
        __typename: "Board",
        id: string,
        title: string,
        description: string,
        createdAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    users:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ownerUser:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject:  {
    __typename: "Project",
    id: string,
    title: string,
    logoUrl: string,
    description: string,
    boards:  {
      __typename: "ModelBoardConnection",
      items:  Array< {
        __typename: "Board",
        id: string,
        title: string,
        description: string,
        createdAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    users:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ownerUser:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type OnCreateBoardSubscription = {
  onCreateBoard:  {
    __typename: "Board",
    id: string,
    title: string,
    description: string,
    columns:  {
      __typename: "ModelColumnConnection",
      items:  Array< {
        __typename: "Column",
        id: string,
        title: string,
        order: number | null,
        color: string,
        createdAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      logoUrl: string,
      description: string,
      boards:  {
        __typename: "ModelBoardConnection",
        nextToken: string | null,
      } | null,
      users:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      ownerUser:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        picture: string | null,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type OnUpdateBoardSubscription = {
  onUpdateBoard:  {
    __typename: "Board",
    id: string,
    title: string,
    description: string,
    columns:  {
      __typename: "ModelColumnConnection",
      items:  Array< {
        __typename: "Column",
        id: string,
        title: string,
        order: number | null,
        color: string,
        createdAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      logoUrl: string,
      description: string,
      boards:  {
        __typename: "ModelBoardConnection",
        nextToken: string | null,
      } | null,
      users:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      ownerUser:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        picture: string | null,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type OnDeleteBoardSubscription = {
  onDeleteBoard:  {
    __typename: "Board",
    id: string,
    title: string,
    description: string,
    columns:  {
      __typename: "ModelColumnConnection",
      items:  Array< {
        __typename: "Column",
        id: string,
        title: string,
        order: number | null,
        color: string,
        createdAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      logoUrl: string,
      description: string,
      boards:  {
        __typename: "ModelBoardConnection",
        nextToken: string | null,
      } | null,
      users:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      ownerUser:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        picture: string | null,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type OnCreateColumnSubscription = {
  onCreateColumn:  {
    __typename: "Column",
    id: string,
    title: string,
    order: number | null,
    color: string,
    board:  {
      __typename: "Board",
      id: string,
      title: string,
      description: string,
      columns:  {
        __typename: "ModelColumnConnection",
        nextToken: string | null,
      } | null,
      project:  {
        __typename: "Project",
        id: string,
        title: string,
        logoUrl: string,
        description: string,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
    } | null,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        content: string,
        isAnonymous: boolean,
        createdAt: number | null,
        updatedAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type OnUpdateColumnSubscription = {
  onUpdateColumn:  {
    __typename: "Column",
    id: string,
    title: string,
    order: number | null,
    color: string,
    board:  {
      __typename: "Board",
      id: string,
      title: string,
      description: string,
      columns:  {
        __typename: "ModelColumnConnection",
        nextToken: string | null,
      } | null,
      project:  {
        __typename: "Project",
        id: string,
        title: string,
        logoUrl: string,
        description: string,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
    } | null,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        content: string,
        isAnonymous: boolean,
        createdAt: number | null,
        updatedAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type OnDeleteColumnSubscription = {
  onDeleteColumn:  {
    __typename: "Column",
    id: string,
    title: string,
    order: number | null,
    color: string,
    board:  {
      __typename: "Board",
      id: string,
      title: string,
      description: string,
      columns:  {
        __typename: "ModelColumnConnection",
        nextToken: string | null,
      } | null,
      project:  {
        __typename: "Project",
        id: string,
        title: string,
        logoUrl: string,
        description: string,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
    } | null,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        content: string,
        isAnonymous: boolean,
        createdAt: number | null,
        updatedAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type OnCreateCardSubscription = {
  onCreateCard:  {
    __typename: "Card",
    id: string,
    content: string,
    isAnonymous: boolean,
    column:  {
      __typename: "Column",
      id: string,
      title: string,
      order: number | null,
      color: string,
      board:  {
        __typename: "Board",
        id: string,
        title: string,
        description: string,
        createdAt: number | null,
      } | null,
      cards:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    likes:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        createdAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ownerUser:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
    updatedAt: number | null,
  } | null,
};

export type OnUpdateCardSubscription = {
  onUpdateCard:  {
    __typename: "Card",
    id: string,
    content: string,
    isAnonymous: boolean,
    column:  {
      __typename: "Column",
      id: string,
      title: string,
      order: number | null,
      color: string,
      board:  {
        __typename: "Board",
        id: string,
        title: string,
        description: string,
        createdAt: number | null,
      } | null,
      cards:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    likes:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        createdAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ownerUser:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
    updatedAt: number | null,
  } | null,
};

export type OnDeleteCardSubscription = {
  onDeleteCard:  {
    __typename: "Card",
    id: string,
    content: string,
    isAnonymous: boolean,
    column:  {
      __typename: "Column",
      id: string,
      title: string,
      order: number | null,
      color: string,
      board:  {
        __typename: "Board",
        id: string,
        title: string,
        description: string,
        createdAt: number | null,
      } | null,
      cards:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    likes:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        createdAt: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ownerUser:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
    updatedAt: number | null,
  } | null,
};

export type OnCreateLikeSubscription = {
  onCreateLike:  {
    __typename: "Like",
    id: string,
    card:  {
      __typename: "Card",
      id: string,
      content: string,
      isAnonymous: boolean,
      column:  {
        __typename: "Column",
        id: string,
        title: string,
        order: number | null,
        color: string,
        createdAt: number | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      ownerUser:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        picture: string | null,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
      updatedAt: number | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type OnUpdateLikeSubscription = {
  onUpdateLike:  {
    __typename: "Like",
    id: string,
    card:  {
      __typename: "Card",
      id: string,
      content: string,
      isAnonymous: boolean,
      column:  {
        __typename: "Column",
        id: string,
        title: string,
        order: number | null,
        color: string,
        createdAt: number | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      ownerUser:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        picture: string | null,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
      updatedAt: number | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type OnDeleteLikeSubscription = {
  onDeleteLike:  {
    __typename: "Like",
    id: string,
    card:  {
      __typename: "Card",
      id: string,
      content: string,
      isAnonymous: boolean,
      column:  {
        __typename: "Column",
        id: string,
        title: string,
        order: number | null,
        color: string,
        createdAt: number | null,
      } | null,
      likes:  {
        __typename: "ModelLikeConnection",
        nextToken: string | null,
      } | null,
      ownerUser:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        picture: string | null,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
      updatedAt: number | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    username: string,
    picture: string | null,
    projects:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    username: string,
    picture: string | null,
    projects:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    username: string,
    picture: string | null,
    projects:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
  } | null,
};

export type OnCreateProjectUsersSubscription = {
  onCreateProjectUsers:  {
    __typename: "ProjectUsers",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      logoUrl: string,
      description: string,
      boards:  {
        __typename: "ModelBoardConnection",
        nextToken: string | null,
      } | null,
      users:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      ownerUser:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        picture: string | null,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
    } | null,
  } | null,
};

export type OnUpdateProjectUsersSubscription = {
  onUpdateProjectUsers:  {
    __typename: "ProjectUsers",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      logoUrl: string,
      description: string,
      boards:  {
        __typename: "ModelBoardConnection",
        nextToken: string | null,
      } | null,
      users:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      ownerUser:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        picture: string | null,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
    } | null,
  } | null,
};

export type OnDeleteProjectUsersSubscription = {
  onDeleteProjectUsers:  {
    __typename: "ProjectUsers",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      picture: string | null,
      projects:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
    } | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      logoUrl: string,
      description: string,
      boards:  {
        __typename: "ModelBoardConnection",
        nextToken: string | null,
      } | null,
      users:  {
        __typename: "ModelProjectUsersConnection",
        nextToken: string | null,
      } | null,
      ownerUser:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        picture: string | null,
        createdAt: number | null,
      } | null,
      createdAt: number | null,
    } | null,
  } | null,
};
