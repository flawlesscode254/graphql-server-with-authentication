const Post = require("../../../models/Post");

module.exports = {
  Query: {
    getPost: async (postId) => {
      try {
        const check = await Post.findOne({
          _id: postId
        })
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
