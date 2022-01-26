const {GraphQLObjectType, GraphQLInt, GraphQLString} = require('graphql');

const MoveType = new GraphQLObjectType({
    name: 'moveType',
    description: 'The elemental type of this move.',
    fields: () => ({
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

module.exports = new GraphQLObjectType({
    name: 'movesDetails',
    description: 'Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        accuracy: { type: GraphQLInt },
        power: { type: GraphQLInt },
        pp: { type: GraphQLInt },
        priority: { type: GraphQLInt },
        type: { type: MoveType }
    })
});