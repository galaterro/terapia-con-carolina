import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponentComponent } from './components/hero-component/hero-component.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ValoresComponent } from "./components/valores/valores.component";
import { CreatividadComponent } from "./components/creatividad/creatividad.component";
import { FormacionComponent } from './components/formacion/formacion.component';
import { LocalizacionComponent } from './components/localizacion/localizacion.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponentComponent, AboutMeComponent, ValoresComponent, CreatividadComponent, FormacionComponent, LocalizacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'terapia-con-carolina';
}
