import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi primera aplicacion con Angular';
  email = 'gustavoh.2312@gmail.com';
  website = 'http://thavoo.github.io/Portafolio';
  hobbies = ['Programar', 'Musica', 'Cine'];
}
