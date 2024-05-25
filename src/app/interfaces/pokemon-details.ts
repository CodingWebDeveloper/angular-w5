import { Ability } from "./ability";
import { Stat } from "./stat";

export interface PokemonDetails{
    abilities: Ability[],
    height: number,
    weight: number,
    sprites: {
        front_default: string,
    },
    stats: Stat[],
}