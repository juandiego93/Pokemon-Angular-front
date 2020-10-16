import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.services';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ],
})
export class BuscadorComponent implements OnInit {

  pokemons: any[] = [];
  value: string;

  constructor(private activatedRoute: ActivatedRoute, private pokemonServices: PokemonsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.value = params['value'];
      this.pokemons = this.pokemonServices.searchPokemons(params['value']);
    });
  }

}
