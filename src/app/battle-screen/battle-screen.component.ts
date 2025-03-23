import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon';
import { PokemonDisplayComponent } from '../components/pokemon-display/pokemon-display.component';

@Component({
  selector: 'app-battle-screen',
  templateUrl: './battle-screen.component.html',
  styleUrls: ['./battle-screen.component.css'],
  imports: [PokemonDisplayComponent]
})
export class BattleScreenComponent implements OnInit {
  player: Pokemon = {
    name: 'Pikachu',
    level: 12,
    hp: 35,
    maxHp: 35,
    image: ''
  };

  opponent: Pokemon = {
    name: 'Charmander',
    level: 10,
    hp: 30,
    maxHp: 30,
    image: ''
  };

  battleMessage = 'A wild Charmander appeared!';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemonData();
  }

  loadPokemonData(): void {
    this.pokemonService.getPokemonImage(this.player.name)
      .subscribe(imageUrl => this.player.image = imageUrl);

    this.pokemonService.getPokemonImage(this.opponent.name)
      .subscribe(imageUrl => this.opponent.image = imageUrl);
  }
}
