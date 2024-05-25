import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonList } from './interfaces/pokemon-list';
import { PokemonDetails } from './interfaces/pokemon-details';
const backend_url = "https://pokeapi.co/api/v2/pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:  HttpClient) { }

  getPokemonList(page: number) {
    const url = `${backend_url}/?offset=${(page - 1) * 20}&limit=20`; 
    return this.http.get<PokemonList>(url);
  }

  getPokemon(name: string) {
    const url = `${backend_url}/${name}`; 
    return this.http.get<PokemonDetails>(url);
  }
}
