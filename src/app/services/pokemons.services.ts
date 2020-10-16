import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable()

export class PokemonsService {

    pokemons: Pokemon[]
    pokemonsMovs: []

    constructor(private http: HttpClient) {
        this.getData()
    }

    getData() {
        this.pokemons = require('../../assets/pokemon-data/pokedex.json')
        this.pokemonsMovs = require('../../assets/pokemon-data/movements.json')
    }

    getAllPokemons() {
        return this.pokemons;
    }

    getPokemon(index) {
        this.getData();
        const mov = this.getMov(index)
        const pokemonSearch = this.pokemons.find(pok => {
            return pok.id === Number(index)
        })
        return { pokemonSearch, mov }
    }

    getMov(index) {
        const pokemonMovSearch = this.pokemonsMovs.find(mov => {
            return mov['id'] == Number(index)
        })
        return pokemonMovSearch
    }

    searchPokemons(value: string) {
        const pokemonsArr: Pokemon[] = [];
        value = value.toLowerCase();
        for (let i = 0; i < this.pokemons.length; i++) {
            const pokemon = this.pokemons[i];
            const nombre = pokemon['name']['english'].toLowerCase();
            if (nombre.indexOf(value) >= 0) {
                pokemon.id = i + 1;
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
