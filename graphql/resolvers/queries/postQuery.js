const Post = require("../../../models/Post");

module.exports = {
  Query: {
    getPost: async (_, {postId}) => {
      try {
        const check = await Post.findById(postId)
        if (check) {
          return check;
        } else {
          throw new Error("Post not found");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
