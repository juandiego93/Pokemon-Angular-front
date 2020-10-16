import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.services';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styles: [
  ],
})
export class PokemonComponent implements OnInit {

  pokemon: any = {};

  constructor(private activatedRoute: ActivatedRoute, private pokemonService: PokemonsService) {
    this.activatedRoute.params.subscribe(params => {
      this.pokemon = this.pokemonService.getPokemon(params['id']);
    });
  }

  ngOnInit(): void {
  }

}
