const Post = require("../../../models/Post");
const checkAuth = require("../../../validators/checkAuth");
const {AuthenticationError} = require("apollo-server")

module.exports = {
  Mutation: {
    deletePost: async (_, { postId }, context) => {
      const user = checkAuth(context);
      const check = await Post.findById(postId)
      if (check) {
        if (user.email === check.email) {
          await check.delete();
          context.pubsub.publish("NEW_POST", {
            newPost: post
          })
          return "Post was deleted";
        }
      }
      throw new AuthenticationError("Action not allowed");
    },
  },
};
