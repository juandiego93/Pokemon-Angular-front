import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.services';
import { Pokemon } from '../../interfaces/pokemon.interface';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemon: any = {}
  classPok: string
  movement: {}

  constructor(private activatedRoute: ActivatedRoute, private pokemonService: PokemonsService) {
    this.activatedRoute.params.subscribe(params => {
      this.pokemon = this.pokemonService.getPokemon(params['id']).pokemonSearch;
      this.movement = this.pokemonService.getPokemon(params['id']).mov;      
    });
  }

  ngOnInit(): void {
  }

}
