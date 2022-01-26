const { GraphQLObjectType, GraphQLInt, GraphQLBoolean, GraphQLString, GraphQLList } = require("graphql");

const LanguageType = new GraphQLObjectType({
    name: 'language',
    description: 'Language translations',
    fields: () => ({
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

const NamesType = new GraphQLObjectType({
    name: 'names',
    description: 'The name of this resource listed in different languages.',
    fields: () => ({
        language: { type: LanguageType },
        name: { type: GraphQLString }
    })
});

const MoveDamageClassType = new GraphQLObjectType({
    name: 'moveDamageClass',
    description: 'The class of damage this stat is directly related to.',
    fields: () => ({
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

const CharacteristicsType = new GraphQLObjectType({
    name: 'characteristics',
    description: 'A list of characteristics that are set on a Pokémon when its highest base stat is this stat.',
    fields: () => ({
        urL: { type: GraphQLString }
    })
});

const AffectingNaturesDecreaseType = new GraphQLObjectType({
    name: 'natureDecrease',
    description: 'A list of moves and how they change the referenced stat.',
    fields: () => ({
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

const AffectingNaturesIncreaseType = new GraphQLObjectType({
    name: 'natureIncrease',
    description: 'A list of moves and how they change the referenced stat.',
    fields: () => ({
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

const AffectingNaturesType = new GraphQLObjectType({
    name: 'affectingNatures',
    description: 'A detail of natures which affect this stat positively or negatively.',
    fields: () => ({
        decrease: { type: new GraphQLList(AffectingNaturesDecreaseType) },
        increase: { type: new GraphQLList(AffectingNaturesIncreaseType) }
    })
});

const MoveType = new GraphQLObjectType({
    name: 'move',
    description: 'Move details',
    fields: () => ({
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

const AffectingMovesDecreaseType = new GraphQLObjectType({
    name: 'moveDecrease',
    description: 'A list of moves and how they change the referenced stat.',
    fields: () => ({
        change: { type: GraphQLInt },
        move: { type: MoveType }
    })
});

const AffectingMovesIncreaseType = new GraphQLObjectType({
    name: 'moveIncrease',
    description: 'A list of moves and how they change the referenced stat.',
    fields: () => ({
        change: { type: GraphQLInt },
        move: { type: MoveType }
    })
});

const AffectingMovesType = new GraphQLObjectType({
    name: 'affectingMoves',
    description: 'A detail of moves which affect this stat positively or negatively.',
    fields: () => ({
        decrease: { type: new GraphQLList(AffectingMovesDecreaseType) },
        increase: { type: new GraphQLList(AffectingMovesIncreaseType) }
    })
});

module.exports = new GraphQLObjectType({
    name: 'stats',
    description: 'Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.',
    fields: () => ({
        affecting_moves: { type: AffectingMovesType },
        affecting_natures: { type: AffectingNaturesType },
        characteristics: { type: new GraphQLList(CharacteristicsType) },
        game_index: { type: GraphQLInt },
        id: { type: GraphQLInt },
        is_battle_only: { type: GraphQLBoolean },
        move_damage_class: { type: MoveDamageClassType },
        name: { type: GraphQLString },
        names: { type: new GraphQLList(NamesType) }
    })
});