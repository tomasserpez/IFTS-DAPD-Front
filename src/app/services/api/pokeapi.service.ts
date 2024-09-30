import { Injectable } from '@angular/core';

import PokeAPI from 'pokeapi-typescript';

@Injectable({
  providedIn: 'root'
})

//Angular service wrapper for the PokeAPI static class
export class PokeapiService extends PokeAPI {

}
