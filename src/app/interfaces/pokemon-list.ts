import { PokemonCard } from "./pokemon-card";

export interface PokemonList {
    count:number;
    next: number | null;
    previous: number | null;
    results: PokemonCard[],
}