const { GraphQLObjectType, GraphQLString, GraphQLFloat } = require("graphql");

module.exports = new GraphQLObjectType({
    name: 'typeModifiers',
    description: 'Type modifiers to apply to damage calculation',
    fields: () => ({
        attackName: { type: GraphQLString },
        fire: { type: GraphQLFloat },
        water: { type: GraphQLFloat },
        grass: { type: GraphQLFloat },
        electric: { type: GraphQLFloat },
        ice: { type: GraphQLFloat },
        psychic: { type: GraphQLFloat },
        normal: { type: GraphQLFloat },
        fighting: { type: GraphQLFloat },
        flying: { type: GraphQLFloat },
        ground: { type: GraphQLFloat },
        rock: { type: GraphQLFloat },
        bug: { type: GraphQLFloat },
        poison: { type: GraphQLFloat },
        ghost: { type: GraphQLFloat },
        dragon: { type: GraphQLFloat }
    })
});