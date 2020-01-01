// tslint:disable
// this is an auto generated file. This will be overwritten

export const getProject = `query GetProject($id: ID!) {
  getProject(id: $id) {
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
export const listProjects = `query ListProjects(
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getBoard = `query GetBoard($id: ID!) {
  getBoard(id: $id) {
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
export const listBoards = `query ListBoards(
  $filter: ModelBoardFilterInput
  $limit: Int
  $nextToken: String
) {
  listBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getColumn = `query GetColumn($id: ID!) {
  getColumn(id: $id) {
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
export const listColumns = `query ListColumns(
  $filter: ModelColumnFilterInput
  $limit: Int
  $nextToken: String
) {
  listColumns(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getCard = `query GetCard($id: ID!) {
  getCard(id: $id) {
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
export const listCards = `query ListCards(
  $filter: ModelCardFilterInput
  $limit: Int
  $nextToken: String
) {
  listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getLike = `query GetLike($id: ID!) {
  getLike(id: $id) {
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
export const listLikes = `query ListLikes(
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      card {
        id
        content
        isAnonymous
        createdAt
        updatedAt
      }
      user {
        id
        name
        email
        username
        picture
        createdAt
      }
      createdAt
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
