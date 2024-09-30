import { Component } from '@angular/core';
import { PokeapiService } from '../services/api/pokeapi.service';
import { INamedApiResourceList, IPokemon } from 'pokeapi-typescript';
import { Router } from '@angular/router';
import Utils from '../utilities/utils';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public pokemonList : INamedApiResourceList<IPokemon> | undefined

  //Only instance members can be accessed from the view, so we have to do this:
  public capFirstLetter = Utils.capFirstLetter;

  constructor(private router : Router) {
      
  }

  async ngOnInit(){
    await this.ionViewDidLoad();
  }

  async ionViewDidLoad(){
    //This returns the INamedApiResourceList for all the pokemon in the api
    this.pokemonList = await PokeapiService.Pokemon.listAll();
  }

  getPokemonButtonHandler(pokemonId : string){
    const URL = `/pokemon/${pokemonId}`;
    this.router.navigateByUrl(URL);
  }

}
