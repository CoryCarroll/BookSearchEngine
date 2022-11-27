const { User } = require("../models");
const {AuthenticationError} = require('apollo-server-express');
const {signToken} = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('not logged in ')
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
        const user = await User.create(args)
        const token = signToken(user)
        return {token, user}
    }
  }
};

module.exports = resolvers;
