import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemonImage(name: string): Observable<string> {
    return this.http.get<any>(`${this.apiUrl}${name}`).pipe(
      map(response => response.sprites.front_default)
    );
  }
}
