import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-battle-screen',
  templateUrl: './battle-screen.component.html',
  styleUrls: ['./battle-screen.component.css']
})
export class BattleScreenComponent implements OnInit {
  player = {
    name: 'Pikachu',
    level: 12,
    hp: 35,
    maxHp: 35,
    image: '' // Will be loaded dynamically
  };

  opponent = {
    name: 'Charmander',
    level: 10,
    hp: 30,
    maxHp: 30,
    image: '' // Will be loaded dynamically
  };

  battleMessage = 'A wild Charmander appeared!';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadPokemonImage('pikachu', 'player');
    this.loadPokemonImage('charmander', 'opponent');
  }

  loadPokemonImage(pokemonName: string, role: 'player' | 'opponent') {
    this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .subscribe(response => {
        const imageUrl = response.sprites.front_default;
        if (role === 'player') {
          this.player.image = imageUrl;
        } else {
          this.opponent.image = imageUrl;
        }
      });
  }
}
