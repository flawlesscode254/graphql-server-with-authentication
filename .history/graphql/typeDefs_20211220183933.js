const gql = require("graphql-tag")

const typeDefs = gql`
    type Post {
        username: String,
        email: String
    }
    type User {
        id: String,
        username: String,
        email: String
    }
    input RegisterInput {
        username: String,
        email: String,
        password: String,
        confirmPassword: String
    }
    type Query {
        getPosts: [Post]
    }
    type Mutation {
        createPost(username: String, email: String): Post
        register(registerInput: RegisterInput): User
    }
`

module.exports = typeDefs