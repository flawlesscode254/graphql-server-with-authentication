const gql = require("graphql-tag")

const typeDefs = gql`
    type Post {
        id: String,
        username: String,
        email: String,
        body: String
    }
    type User {
        id: String,
        username: String,
        email: String,
        token: String
    }
    input RegisterInput {
        username: String,
        email: String,
        password: String,
        confirmPassword: String
    }
    type Query {
        getPosts: [Post]
        getPost(postId: ID)
    }
    type Mutation {
        createPost(username: String!, email: String!): Post
        register(registerInput: RegisterInput): User
        login(email: String!, password: String!): User
    }
`

module.exports = typeDefs