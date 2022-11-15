const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Mutation {
    login: ID
    addUser: String
    saveBook: ID
    removeBook: ID
  }

  type Query {
    me: 
  }

  type User {
    -id:
    username: String
    email:
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId:
    authors:
    description:
    title:
    image:
    link:
  }

  type Auth {
    token:
    user:
  }
`;

module.exports = typeDefs;
