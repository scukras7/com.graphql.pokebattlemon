const {GraphQLSchema} = require('graphql');
const rootQuery = require('../graphqlQueries/rootQueryType');

module.exports = new GraphQLSchema({
    query: rootQuery.rootQueryType
});