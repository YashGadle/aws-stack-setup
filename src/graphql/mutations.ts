// tslint:disable
// this is an auto generated file. This will be overwritten

export const addBoard = `mutation AddBoard($limit: Int, $start: Int) {
  addBoard(limit: $limit, start: $start) {
    id
    title
    description
    columns {
      items {
        id
        title
        order
        color
        createdAt
      }
      nextToken
    }
    project {
      id
      title
      logoUrl
      description
      boards {
        nextToken
      }
      users {
        nextToken
      }
      ownerUser {
        id
        name
        email
        username
        picture
        createdAt
      }
      createdAt
    }
    createdAt
  }
}
`;
export const createProject = `mutation CreateProject(
  $input: CreateProjectInput!
  $condition: ModelProjectConditionInput
) {
  createProject(input: $input, condition: $condition) {
    id
    title
    logoUrl
    description
    boards {
      items {
        id
        title
        description
        createdAt
      }
      nextToken
    }
    users {
      items {
        id
      }
      nextToken
    }
    ownerUser {
      id
      name
      email
      username
      picture
      projects {
        nextToken
      }
      createdAt
    }
    createdAt
  }
}
`;
export const updateProject = `mutation UpdateProject(
  $input: UpdateProjectInput!
  $condition: ModelProjectConditionInput
) {
  updateProject(input: $input, condition: $condition) {
    id
    title
    logoUrl
    description
    boards {
      items {
        id
        title
        description
        createdAt
      }
      nextToken
    }
    users {
      items {
        id
      }
      nextToken
    }
    ownerUser {
      id
      name
      email
      username
      picture
      projects {
        nextToken
      }
      createdAt
    }
    createdAt
  }
}
`;
export const deleteProject = `mutation DeleteProject(
  $input: DeleteProjectInput!
  $condition: ModelProjectConditionInput
) {
  deleteProject(input: $input, condition: $condition) {
    id
    title
    logoUrl
    description
    boards {
      items {
        id
        title
        description
        createdAt
      }
      nextToken
    }
    users {
      items {
        id
      }
      nextToken
    }
    ownerUser {
      id
      name
      email
      username
      picture
      projects {
        nextToken
      }
      createdAt
    }
    createdAt
  }
}
`;
export const createBoard = `mutation CreateBoard(
  $input: CreateBoardInput!
  $condition: ModelBoardConditionInput
) {
  createBoard(input: $input, condition: $condition) {
    id
    title
    description
    columns {
      items {
        id
        title
        order
        color
        createdAt
      }
      nextToken
    }
    project {
      id
      title
      logoUrl
      description
      boards {
        nextToken
      }
      users {
        nextToken
      }
      ownerUser {
        id
        name
        email
        username
        picture
        createdAt
      }
      createdAt
    }
    createdAt
  }
}
`;
export const updateBoard = `mutation UpdateBoard(
  $input: UpdateBoardInput!
  $condition: ModelBoardConditionInput
) {
  updateBoard(input: $input, condition: $condition) {
    id
    title
    description
    columns {
      items {
        id
        title
        order
        color
        createdAt
      }
      nextToken
    }
    project {
      id
      title
      logoUrl
      description
      boards {
        nextToken
      }
      users {
        nextToken
      }
      ownerUser {
        id
        name
        email
        username
        picture
        createdAt
      }
      createdAt
    }
    createdAt
  }
}
`;
export const deleteBoard = `mutation DeleteBoard(
  $input: DeleteBoardInput!
  $condition: ModelBoardConditionInput
) {
  deleteBoard(input: $input, condition: $condition) {
    id
    title
    description
    columns {
      items {
        id
        title
        order
        color
        createdAt
      }
      nextToken
    }
    project {
      id
      title
      logoUrl
      description
      boards {
        nextToken
      }
      users {
        nextToken
      }
      ownerUser {
        id
        name
        email
        username
        picture
        createdAt
      }
      createdAt
    }
    createdAt
  }
}
`;
export const createColumn = `mutation CreateColumn(
  $input: CreateColumnInput!
  $condition: ModelColumnConditionInput
) {
  createColumn(input: $input, condition: $condition) {
    id
    title
    order
    color
    board {
      id
      title
      description
      columns {
        nextToken
      }
      project {
        id
        title
        logoUrl
        description
        createdAt
      }
      createdAt
    }
    cards {
      items {
        id
        content
        isAnonymous
        createdAt
        updatedAt
      }
      nextToken
    }
    createdAt
  }
}
`;
export const updateColumn = `mutation UpdateColumn(
  $input: UpdateColumnInput!
  $condition: ModelColumnConditionInput
) {
  updateColumn(input: $input, condition: $condition) {
    id
    title
    order
    color
    board {
      id
      title
      description
      columns {
        nextToken
      }
      project {
        id
        title
        logoUrl
        description
        createdAt
      }
      createdAt
    }
    cards {
      items {
        id
        content
        isAnonymous
        createdAt
        updatedAt
      }
      nextToken
    }
    createdAt
  }
}
`;
export const deleteColumn = `mutation DeleteColumn(
  $input: DeleteColumnInput!
  $condition: ModelColumnConditionInput
) {
  deleteColumn(input: $input, condition: $condition) {
    id
    title
    order
    color
    board {
      id
      title
      description
      columns {
        nextToken
      }
      project {
        id
        title
        logoUrl
        description
        createdAt
      }
      createdAt
    }
    cards {
      items {
        id
        content
        isAnonymous
        createdAt
        updatedAt
      }
      nextToken
    }
    createdAt
  }
}
`;
export const createCard = `mutation CreateCard(
  $input: CreateCardInput!
  $condition: ModelCardConditionInput
) {
  createCard(input: $input, condition: $condition) {
    id
    content
    isAnonymous
    column {
      id
      title
      order
      color
      board {
        id
        title
        description
        createdAt
      }
      cards {
        nextToken
      }
      createdAt
    }
    likes {
      items {
        id
        createdAt
      }
      nextToken
    }
    ownerUser {
      id
      name
      email
      username
      picture
      projects {
        nextToken
      }
      createdAt
    }
    createdAt
    updatedAt
  }
}
`;
export const updateCard = `mutation UpdateCard(
  $input: UpdateCardInput!
  $condition: ModelCardConditionInput
) {
  updateCard(input: $input, condition: $condition) {
    id
    content
    isAnonymous
    column {
      id
      title
      order
      color
      board {
        id
        title
        description
        createdAt
      }
      cards {
        nextToken
      }
      createdAt
    }
    likes {
      items {
        id
        createdAt
      }
      nextToken
    }
    ownerUser {
      id
      name
      email
      username
      picture
      projects {
        nextToken
      }
      createdAt
    }
    createdAt
    updatedAt
  }
}
`;
export const deleteCard = `mutation DeleteCard(
  $input: DeleteCardInput!
  $condition: ModelCardConditionInput
) {
  deleteCard(input: $input, condition: $condition) {
    id
    content
    isAnonymous
    column {
      id
      title
      order
      color
      board {
        id
        title
        description
        createdAt
      }
      cards {
        nextToken
      }
      createdAt
    }
    likes {
      items {
        id
        createdAt
      }
      nextToken
    }
    ownerUser {
      id
      name
      email
      username
      picture
      projects {
        nextToken
      }
      createdAt
    }
    createdAt
    updatedAt
  }
}
`;
export const createLike = `mutation CreateLike(
  $input: CreateLikeInput!
  $condition: ModelLikeConditionInput
) {
  createLike(input: $input, condition: $condition) {
    id
    card {
      id
      content
      isAnonymous
      column {
        id
        title
        order
        color
        createdAt
      }
      likes {
        nextToken
      }
      ownerUser {
        id
        name
        email
        username
        picture
        createdAt
      }
      createdAt
      updatedAt
    }
    user {
      id
      name
      email
      username
      picture
      projects {
        nextToken
      }
      createdAt
    }
    createdAt
  }
}
`;
export const updateLike = `mutation UpdateLike(
  $input: UpdateLikeInput!
  $condition: ModelLikeConditionInput
) {
  updateLike(input: $input, condition: $condition) {
    id
    card {
      id
      content
      isAnonymous
      column {
        id
        title
        order
        color
        createdAt
      }
      likes {
        nextToken
      }
      ownerUser {
        id
        name
        email
        username
        picture
        createdAt
      }
      createdAt
      updatedAt
    }
    user {
      id
      name
      email
      username
      picture
      projects {
        nextToken
      }
      createdAt
    }
    createdAt
  }
}
`;
export const deleteLike = `mutation DeleteLike(
  $input: DeleteLikeInput!
  $condition: ModelLikeConditionInput
) {
  deleteLike(input: $input, condition: $condition) {
    id
    card {
      id
      content
      isAnonymous
      column {
        id
        title
        order
        color
        createdAt
      }
      likes {
        nextToken
      }
      ownerUser {
        id
        name
        email
        username
        picture
        createdAt
      }
      createdAt
      updatedAt
    }
    user {
      id
      name
      email
      username
      picture
      projects {
        nextToken
      }
      createdAt
    }
    createdAt
  }
}
`;
export const createUser = `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    name
    email
    username
    picture
    projects {
      items {
        id
      }
      nextToken
    }
    createdAt
  }
}
`;
export const updateUser = `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    name
    email
    username
    picture
    projects {
      items {
        id
      }
      nextToken
    }
    createdAt
  }
}
`;
export const deleteUser = `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    name
    email
    username
    picture
    projects {
      items {
        id
      }
      nextToken
    }
    createdAt
  }
}
`;
export const createProjectUsers = `mutation CreateProjectUsers(
  $input: CreateProjectUsersInput!
  $condition: ModelProjectUsersConditionInput
) {
  createProjectUsers(input: $input, condition: $condition) {
    id
    user {
      id
      name
      email
      username
      picture
      projects {
        nextToken
      }
      createdAt
    }
    project {
      id
      title
      logoUrl
      description
      boards {
        nextToken
      }
      users {
        nextToken
      }
      ownerUser {
        id
        name
        email
        username
        picture
        createdAt
      }
      createdAt
    }
  }
}
`;
export const updateProjectUsers = `mutation UpdateProjectUsers(
  $input: UpdateProjectUsersInput!
  $condition: ModelProjectUsersConditionInput
) {
  updateProjectUsers(input: $input, condition: $condition) {
    id
    user {
      id
      name
      email
      username
      picture
      projects {
        nextToken
      }
      createdAt
    }
    project {
      id
      title
      logoUrl
      description
      boards {
        nextToken
      }
      users {
        nextToken
      }
      ownerUser {
        id
        name
        email
        username
        picture
        createdAt
      }
      createdAt
    }
  }
}
`;
export const deleteProjectUsers = `mutation DeleteProjectUsers(
  $input: DeleteProjectUsersInput!
  $condition: ModelProjectUsersConditionInput
) {
  deleteProjectUsers(input: $input, condition: $condition) {
    id
    user {
      id
      name
      email
      username
      picture
      projects {
        nextToken
      }
      createdAt
    }
    project {
      id
      title
      logoUrl
      description
      boards {
        nextToken
      }
      users {
        nextToken
      }
      ownerUser {
        id
        name
        email
        username
        picture
        createdAt
      }
      createdAt
    }
  }
}
`;
