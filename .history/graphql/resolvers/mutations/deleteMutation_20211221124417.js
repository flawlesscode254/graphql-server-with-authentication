const Post = require("../../../models/Post");
const checkAuth = require("../../../validators/checkAuth");
const {AuthenticationError} = require("apollo-server")

module.exports = {
  Mutation: {
    deletePost: async (_, { postId }, context) => {
      const user = checkAuth(context);
      const check = Post.findOne({
        id: postId,
      });
      if (check) {
        if (user.email === check.email) {
          await check.deleteOne();
          return "Post was deleted";
        }
      }
      throw new AuthenticationError("Post was not found");
    },
  },
};
