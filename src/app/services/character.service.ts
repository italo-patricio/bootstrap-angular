import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterModel } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  urlApi = 'https://hp-api.herokuapp.com/api/characters/students';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<CharacterModel[]>(this.urlApi);
  }
}
