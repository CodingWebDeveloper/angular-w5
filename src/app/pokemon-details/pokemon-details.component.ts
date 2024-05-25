import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { PokemonDetails } from '../interfaces/pokemon-details';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './pokemon-details.component.html',
  providers: [PokemonService],
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  pokemon!: PokemonDetails;

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.pokemonService.getPokemon(name).subscribe((data) => {
        this.pokemon = data;
      });
    }
  }
}
