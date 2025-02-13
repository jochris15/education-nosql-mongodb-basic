import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { userTypeDefs, userResolvers } from './schemas/userSchema.js';

const server = new ApolloServer({
    typeDefs: [userTypeDefs],
    resolvers: [userResolvers],
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);