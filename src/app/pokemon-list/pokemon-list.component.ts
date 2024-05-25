import { Component } from '@angular/core';
import { PokemonCard } from "../interfaces/pokemon-card";
import { PokemonService } from '../pokemon.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  providers: [PokemonService],
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  totalRecord = 1;
  pokemons: PokemonCard[] = [];
  currentPage = 1;

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit() {
    this.fetchPokemonList();
  }

  fetchPokemonList() {
    this.pokemonService.getPokemonList(this.currentPage)
      .subscribe(data => {
        this.pokemons = data.results;
        this.totalRecord = data.count;
      });
  }

  changePage(direction: string) {
    if (direction === 'prev' && this.currentPage > 1) {
      this.currentPage--;
    } else if (direction === 'next') {
      this.currentPage++;
    }
    this.fetchPokemonList();
  }

  navigateToDetails(name: string) {
    this.router.navigate(["/pokemon", name]);
  }
}
