import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [ `
    li{
      cursor:pointer;
    }
  `
  ]
})
export class PorPaisComponent {

  termino:string = '';
  hayError: boolean = false;
  paises:Country[]=[];
  paisessugeridos:Country[]=[];
  mostrarsug:boolean =false;

  constructor(private PaisService:PaisService) { }
  buscar(termino:string){
    this.mostrarsug = false;
    this.termino = termino;
    this.hayError= false;
    this.PaisService.buscarPais(this.termino)
    .subscribe( resp => {
      console.log(resp)
      this.paises = resp;
    }, err => {
      this.hayError = true;
      this.paises = []
    });
    

  }

  sugerencias(termino:string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarsug = true;
    console.log(termino)
    this.PaisService.buscarPais(termino)
    .subscribe(paises => this.paisessugeridos = paises.splice(0,5),
    (err) => this.paisessugeridos = []);
    
  }

  buscarsugerico(termino:string){
    this.buscar(termino);
    
  }
}
