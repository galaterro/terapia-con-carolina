import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponentComponent } from './components/hero-component/hero-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'terapia-con-carolina';
}
