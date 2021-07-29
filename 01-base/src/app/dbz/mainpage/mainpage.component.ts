import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html'
})
export class MainpageComponent  {

  nuevo:Personaje = {
    nombre: 'Maestro ROshi',
    poder: 500
  }

  constructor(){
  }
}
