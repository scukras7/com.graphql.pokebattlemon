const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt} = require('graphql');

const VersionType = new GraphQLObjectType({
    name: 'encounterVersion',
    description: 'Encounter version',
    fields: () => ({
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

const MethodType = new GraphQLObjectType({
    name: 'encounterMethod',
    description: 'Encounter method',
    fields: () => ({
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

const EncouterDetailsType = new GraphQLObjectType({
    name: 'encounterDetails',
    description: 'Details about an encounter',
    fields: () => ({
        chance: { type: GraphQLInt },
        max_level: { type: GraphQLInt },
        min_level: { type: GraphQLInt },
        method: { type: MethodType }
    })
});

const VersionDetailsType = new GraphQLObjectType({
    name: 'locationAreaEncounterVersionDetails',
    description: 'Location area encounter details by game version',
    fields: () => ({
        max_chance: { type: GraphQLInt },
        encounter_details: { type: new GraphQLList(EncouterDetailsType) },
        version: { type: VersionType }
    })
});

const LocationAreaType = new GraphQLObjectType({
    name: 'locationArea',
    description: 'Location area',
    fields: () => ({
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

const EncountersType = new GraphQLObjectType({
    name: 'encounters',
    description: 'List of location area encounters',
    fields: () => ({
        location_area: { type: LocationAreaType },
        version_details: { type: new GraphQLList(VersionDetailsType) }
    })
});

module.exports = new GraphQLObjectType({
    name: 'locationAreaEncounters',
    description: 'Pokémon Location Areas are areas where Pokémon can be found.',
    fields: () => ({
        id: { type: GraphQLString },
        encounters: { type: new GraphQLList(EncountersType) }
    })
});