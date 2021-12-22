const Post = require("../../../models/Post");

module.exports = {
  Query: {
    getPosts: async () => {
      try {
        const get = await Post.find().sort({
          createdAt: -1
        });
        return get;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
