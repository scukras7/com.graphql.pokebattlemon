const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList} = require('graphql');

const GroupType = new GraphQLObjectType({
    name:'gameVersionsGroup',
    description: 'Version group names',
    fields: () => ({
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

const LanguageType = new GraphQLObjectType({
    name: 'gameVersionsLanguage',
    description: 'Game version names in various languages',
    fields: () => ({
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

const NameType = new GraphQLObjectType({
    name: 'gameVersionsNames',
    description: 'List of game version names in various languages',
    fields: () => ({
        name: { type: GraphQLString },
        language: { type: LanguageType }
    })
});

module.exports = new GraphQLObjectType({
    name: 'gameVersions',
    description: 'Versions of the games, e.g. Red, Blue or Yellow.',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        names: { type: new GraphQLList(NameType) },
        version_group: { type: GroupType }
    })
});