import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {

  pokemons: {}[];

  constructor(private pokemonsService: PokemonsService, private router: Router) {
  }

  ngOnInit(): void {
    this.pokemonsService.getData()
    setTimeout(() => {
      this.pokemons = this.pokemonsService.getAllPokemons();
    }, 2000);
  }

  viewPokemon(index) {
    this.router.navigate(['/pokemon', index]);
  }


}
