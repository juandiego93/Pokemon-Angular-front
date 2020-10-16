import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.services';

@Component({
  selector: 'app-pokemon-tarjeta',
  templateUrl: './pokemon-tarjeta.component.html',
  styleUrls: ['./pokemon-tarjeta.component.css']
})
export class PokemonTarjetaComponent implements OnInit {

  @Input() pokemon: any = {};
  @Input() index: number;

  @Output() pokemonSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.pokemonSeleccionado = new EventEmitter();
    console.log(this.index, this.pokemon,this.pokemonSeleccionado); 
  }

  ngOnInit(): void {
  }

  viewPokemon() {
    this.router.navigate(['/pokemon', this.index]);
  }

}
