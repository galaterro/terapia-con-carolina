import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ValoresComponent } from "./components/valores/valores.component";
import { CreatividadComponent } from "./components/creatividad/creatividad.component";
import { FormacionComponent } from './components/formacion/formacion.component';
import { LocalizacionComponent } from './components/localizacion/localizacion.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeroComponent, 
    AboutMeComponent, 
    ValoresComponent, 
    CreatividadComponent, 
    FormacionComponent, 
    LocalizacionComponent, 
    CommentsComponent,
    ContactoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'terapia-con-carolina';
}
