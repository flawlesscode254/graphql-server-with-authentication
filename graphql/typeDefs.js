const gql = require("graphql-tag")

const typeDefs = gql`
    type Likes {
        id: ID,
        username: String,
        email: String
    }
    type Comment {
        id: ID,
        username: String,
        email: String,
        body: String
    }
    type Post {
        id: ID,
        username: String,
        email: String,
        body: String,
        createdAt: String
        comments: [Comment]
        likes: [Likes]
        likeCount: Int
        commentCount: Int
    }
    type User {
        id: ID,
        username: String,
        email: String,
        token: String,
        createdAt: String
    }
    input RegisterInput {
        username: String,
        email: String,
        password: String,
        confirmPassword: String
    }
    type Query {
        getPosts: [Post]
        getPost(postId: ID!): Post
    }
    type Mutation {
        createPost(body: String!): Post
        register(registerInput: RegisterInput): User
        login(email: String!, password: String!): User
        deletePost(postId: ID!): String
        createComment(postId: ID, body: String): Post
        deleteComment(postId: ID, commentId: ID): Post
        likePost(postId: ID): Post
    }
    type Subscription {
        newPost: Post
    }
`

module.exports = typeDefs