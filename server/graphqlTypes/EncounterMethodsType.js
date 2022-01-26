const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList} = require('graphql');

const EncounterMethodLanguageType = new GraphQLObjectType({
    name: 'encounterMethodsLanguage',
    description: 'Encounter method language',
    fields: () => ({
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

const EncounterMethodNameType = new GraphQLObjectType({
    name: 'encounterMethodsNames',
    description: 'Encounter method name',
    fields: () => ({
        language: { type: EncounterMethodLanguageType }
    })
});

module.exports = new GraphQLObjectType({
    name: 'encounterMethods',
    description: 'Methods by which the player might encounter Pokémon in the wild, e.g., walking in tall grass.',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        order: { type: GraphQLInt },
        names: { type: new GraphQLList(EncounterMethodNameType) }
    })
});