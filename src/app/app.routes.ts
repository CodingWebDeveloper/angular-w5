import { Routes } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

export const routes: Routes = [
    {
        path: "pokemon/:name", component: PokemonDetailsComponent,
        
    },
    {
        path: "",  component: PokemonListComponent,
    }
];
