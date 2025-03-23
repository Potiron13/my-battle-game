import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-display',
  templateUrl: './pokemon-display.component.html',
  styleUrls: ['./pokemon-display.component.css']
})
export class PokemonDisplayComponent {
  @Input() pokemon!: Pokemon;
}
