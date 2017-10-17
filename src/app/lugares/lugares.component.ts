import { Component } from '@angular/core';
import {LugaresService} from "../services/lugares.service";
import {trigger, state, style} from "@angular/animations"

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'],
  animations: [
    trigger('contenedorAnimable',[
        state('initial', style({
           opacity:0,
           backgroundColor: 'green',
           transform: 'rotate3d(0,0,0,0deg)'
        })),
        state('ifinal', style({
           opacity:1,
           backgroundColor: 'yellow',
           transform: 'rotate3d(5,10,20,30deg)'
        })),
      ])
  ]

})

/* PROBANDO ROUTER */
export class LugaresComponent {
  title = 'PlatziSquare';
  state = 'initial';

  lat:number= -12.0482677;
  lng:number= -77.0453564;
  lugares = null;
  constructor(private lugaresService: LugaresService){
    lugaresService.getLugares()
      /*.valueChanges()*/.subscribe(lugares =>{
        console.log(lugares);
        this.lugares = lugares;
        var me = this;
        me.lugares = Object.keys(me.lugares).map(function (key) { return me.lugares[key]; });
        
      }, error => {
        console.log (error);
        alert('Tenemos algo de dificultades, disculpe las molestias. Error: ' + error.statusText)
      });
  }
}
