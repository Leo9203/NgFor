import { Component } from '@angular/core';
import { MY_DATA } from './data';
import { MY_PREGUNTA } from './preguntas';
import { MY_RESPUESTA } from './respuestas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngFor';

  model: any = {};
  data = MY_DATA;
  pregunta=MY_PREGUNTA;
  respuesta=MY_RESPUESTA;

  submit() {
    console.log('Data submitted: ', this.model);
  }

  
}
