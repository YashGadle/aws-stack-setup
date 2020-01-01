// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateProject = `subscription OnCreateProject {
  onCreateProject {
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
export const onUpdateProject = `subscription OnUpdateProject {
  onUpdateProject {
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
export const onDeleteProject = `subscription OnDeleteProject {
  onDeleteProject {
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
export const onCreateBoard = `subscription OnCreateBoard {
  onCreateBoard {
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
export const onUpdateBoard = `subscription OnUpdateBoard {
  onUpdateBoard {
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
export const onDeleteBoard = `subscription OnDeleteBoard {
  onDeleteBoard {
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
export const onCreateColumn = `subscription OnCreateColumn {
  onCreateColumn {
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
export const onUpdateColumn = `subscription OnUpdateColumn {
  onUpdateColumn {
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
export const onDeleteColumn = `subscription OnDeleteColumn {
  onDeleteColumn {
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
export const onCreateCard = `subscription OnCreateCard {
  onCreateCard {
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
export const onUpdateCard = `subscription OnUpdateCard {
  onUpdateCard {
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
export const onDeleteCard = `subscription OnDeleteCard {
  onDeleteCard {
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
export const onCreateLike = `subscription OnCreateLike {
  onCreateLike {
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
export const onUpdateLike = `subscription OnUpdateLike {
  onUpdateLike {
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
export const onDeleteLike = `subscription OnDeleteLike {
  onDeleteLike {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateProjectUsers = `subscription OnCreateProjectUsers {
  onCreateProjectUsers {
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
export const onUpdateProjectUsers = `subscription OnUpdateProjectUsers {
  onUpdateProjectUsers {
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
export const onDeleteProjectUsers = `subscription OnDeleteProjectUsers {
  onDeleteProjectUsers {
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
