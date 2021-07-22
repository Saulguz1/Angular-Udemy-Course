import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'})

export class ListadoComponent {

    heroes: string[] = ['Spiderman', 'Thor', 'Iron Man', 'Dr Strange', ' Capitan America']
    borrado: string = ''
    bandera: boolean = false
    BorrarHeroe (){
      const borrado = this.heroes.pop()
        if(borrado == undefined){
          this.borrado = 'Esta vacio no se borro nada'
          this.bandera = false
        }else[
          this.borrado = borrado,
          this.bandera = true
        ]
      console.log('Borrando...')
    }
}
