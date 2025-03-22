import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BattleScreenComponent } from './battle-screen/battle-screen.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BattleScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-battle-game';
}
