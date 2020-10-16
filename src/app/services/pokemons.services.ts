import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable()

export class PokemonsService {

    pokemons: Pokemon[]

    constructor(private http: HttpClient) {
        this.getData()
    }

    getData() {
        this.http.get('assets/pokemon-data/pokedex.json', { responseType: 'text' })
            .subscribe(data => {
                this.pokemons = JSON.parse(data)
                console.log(data);
            });
    }

    getAllPokemons() {
        console.log(this.pokemons);
        return this.pokemons;
    }

    getPokemon(index) {
        return this.pokemons[index];
    }

    searchPokemons(value: string) {
        const pokemonsArr: Pokemon[] = [];
        value = value.toLowerCase();
        for (let i = 0; i < this.pokemons.length; i++) {
            const pokemon = this.pokemons[i];
            const nombre = pokemon['nombre'].toLowerCase();
            if (nombre.indexOf(value) >= 0) {
                pokemon.id = i;
                pokemonsArr.push(pokemon);
            }
        }
        return pokemonsArr;
    }

}


export interface Pokemon_ {
    idx?: number;
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;

}
