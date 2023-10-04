const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // query my (user that is logged in) games
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('games');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        // add / register a new user profile
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        // login and authenticate an existing user profile
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user exists with the provided email address!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },

        // mutation for adding a new "played game" to a user's profile
        updateGames: async (parent, { games }, context) => {
            if (context.user) {
                // Increment games count by 1
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $inc: { games: 1 } }, // Increment 'games' field by 1
                    { new: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        // mutation for updating a user's "wins" count
        updateWins: async (parent, { wins }, context) => {
            if (context.user) {
                // Increment wins count by 1
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $inc: { wins: 1 } }, // Increment 'wins' field by 1
                    { new: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers;

