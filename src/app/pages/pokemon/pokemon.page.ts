import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Utils from 'src/app/utilities/utils';
import { PokeapiService } from 'src/app/services/api/pokeapi.service';
import { IPokemon } from 'pokeapi-typescript';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  pokemonName : string
  pokemon : IPokemon | null = null;

  //Only instance members can be accessed from the view, so we have to do this:
  public capFirstLetter = Utils.capFirstLetter;

  constructor(private activRoute : ActivatedRoute) {
    //We get the parameter for the pokemon name to fetch from the URL.
    this.pokemonName = this.activRoute.snapshot.paramMap.get("pokemonName") || "";
    if(this.pokemonName == ""){
      return;
    }
    this.GetNamedPokemon(this.pokemonName).then((poke) => this.pokemon = poke);
  }

  async GetNamedPokemon(name: string) : Promise<IPokemon> {
    return await PokeapiService.Pokemon.resolve(name);
  }

  ngOnInit() {
  }

}
