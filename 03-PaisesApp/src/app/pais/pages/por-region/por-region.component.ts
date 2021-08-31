import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5 px;
    }
  `
  ]
})
export class PorRegionComponent {

  regiones:string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  paises:Country[]=[];
  regionActiva:string = ""

  constructor( private PaisService:PaisService) { }

  activarRegion(region:string){

    if(region === this.regionActiva){
      return;
    }

    this.regionActiva = region;
    this.paises = []
    this.PaisService.getPaisesRegion(this.regionActiva)
    .subscribe( resp => {
      console.log(resp)
      this.paises = resp;
    }, err => {
      this.paises = []
    });

  }
  getClassCSS(region:string){
    return  (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary'
  }

}
