const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLBoolean} = require('graphql');

const PokemonTypeObject = new GraphQLObjectType({
    name: 'pokemonType',
    description: 'Pokémon type',
    fields: () => ({
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

const TypesType = new GraphQLObjectType({
    name: 'types',
    description: 'A list of details showing types this Pokémon has.',
    fields: () => ({
        slot: { type: GraphQLInt },
        type: { type: PokemonTypeObject }
    })
});

const StatType = new GraphQLObjectType({
    name: 'stat',
    description: 'Pokémon stat information',
    fields: () => ({
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

const PokemonStatsType = new GraphQLObjectType({
    name: 'pokemonStats',
    description: 'A list of base stat values for this Pokémon.',
    fields: () => ({
        base_stat: { type: GraphQLInt },
        effort: { type: GraphQLInt },
        stat: { type: StatType }
    })
});

const OfficialArtworkSpriteType = new GraphQLObjectType({
    name: 'officialArtworkSprite',
    description: 'Official artwork sprite',
    fields: () => ({
        front_default: { type: GraphQLString }
    })
});

const DreamWorldSpriteType = new GraphQLObjectType({
    name: 'dreamWorldSprite',
    description: 'Dream world sprite',
    fields: () => ({
        front_default: { type: GraphQLString },
        front_female: { type: GraphQLString }
    })
});

const SpriteOtherType = new GraphQLObjectType({
    name: 'spriteOthers',
    description: 'Alternative sprites',
    fields: () => ({
        dream_world: { type: DreamWorldSpriteType },
        official_artwork: { type: OfficialArtworkSpriteType}
    })
});

const SpritesType = new GraphQLObjectType({
    name: 'sprites',
    description: 'Pokémon sprites',
    fields: () => ({
        back_default: { type: GraphQLString },
        back_female: { type: GraphQLString },
        back_shiny: { type: GraphQLString },
        back_shiny_female: { type: GraphQLString },
        front_default: { type: GraphQLString },
        front_female: { type: GraphQLString },
        front_shiny: { type: GraphQLString },
        front_shiny_female: { type: GraphQLString },
        other: { type: SpriteOtherType },
    })
});

const SpeciesType = new GraphQLObjectType({
    name: 'species',
    description: 'Pokémon species information',
    fields: () => ({
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

const MoveLearnMethodType = new GraphQLObjectType({
    name: 'moveLearnMethod',
    description: 'Methods in which Pokémon can learn moves in this version group.',
    fields: () => ({
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

const VersionGroupType = new GraphQLObjectType({
    name: 'versionGroup',
    description: 'Game version',
    fields: () => ({
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

const VersionGroupDetailsType = new GraphQLObjectType({
    name: 'versionGroupDetails',
    description: 'Game version specific move details',
    fields: () => ({
        level_learned_at: { type: GraphQLInt },
        move_learn_method: { type: MoveLearnMethodType },
        version_group: { type: VersionGroupType }
    })
});

const PokemonMoveType = new GraphQLObjectType({
    name: 'pokemonMove',
    description: 'Move name',
    fields: () => ({
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

const MovesType = new GraphQLObjectType({
    name: 'moves',
    description: 'Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.',
    fields: () => ({
        move: { type: PokemonMoveType },
        version_group_details: { type: new GraphQLList(VersionGroupDetailsType) }
    })
});

const VersionType = new GraphQLObjectType({
    name: 'version',
    description: 'Pokémon game version',
    fields: () => ({
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

const GameIndicesType = new GraphQLObjectType({
    name: 'gameIndices',
    description: 'Game version',
    fields: () => ({
        game_index: { type: GraphQLInt },
        version: { type: VersionType }
    })
});

const AbilityType = new GraphQLObjectType({
    name: 'ability',
    description: 'Pokémon ability',
    fields: () => ({
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

const AbilitiesType = new GraphQLObjectType({
    name: 'abilities',
    description: 'Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time.',
    fields: () => ({
        ability: { type: AbilityType },
        is_hidden: { type: GraphQLBoolean },
        slot: { type: GraphQLInt }
    })
});

module.exports = new GraphQLObjectType({
    name: 'pokemon',
    description: 'Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings',
    fields: () => ({
        abilities: { type: new GraphQLList(AbilitiesType) },
        base_experience: { type: GraphQLInt },
        game_indices: { type: new GraphQLList(GameIndicesType) },
        height: { type: GraphQLInt },
        id: { type: GraphQLInt },
        is_default: { type: GraphQLBoolean },
        location_area_encounters: { type: GraphQLString },
        moves: { type: new GraphQLList(MovesType) },
        name: { type: GraphQLString },
        order: { type: GraphQLInt },
        species: { type: SpeciesType },
        sprites: { type: SpritesType },
        stats: { type: new GraphQLList(PokemonStatsType) },
        types: { type: new GraphQLList(TypesType) },
        weight: { type: GraphQLInt }
    })
});