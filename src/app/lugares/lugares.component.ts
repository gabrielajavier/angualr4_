import { Component } from '@angular/core';
import {LugaresService} from "../services/lugares.service";
import {trigger, state, style, transition, animate} from "@angular/animations"

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'],
  animations: [
    trigger('contenedorAnimable', [
        state('inicial', style({
           opacity:0,
           backgroundColor: 'green',
           transform: 'rotate3d(0,0,0,0deg)'
        })),
        state('final', style({
           opacity:1,
           backgroundColor: 'yellow',
           transform: 'rotate3d(5,10,20,30deg)'
        })),
        transition('inicial => final', animate(1000)),
        transition('final => inicial', animate(500)),
      ])
  ]

})

/* PROBANDO ROUTER */
export class LugaresComponent {
  title = 'PlatziSquare';
  state = 'final';

  lat:number= -12.0482677;
  lng:number= -77.0453564;
  lugares = null;
  animar(){
    this.state = (this.state === 'final') ? 'inicial' : 'final';
  }
      animacionInicia(e){
        console.log('Iniciado!');
        console.log(e);
    }
    animacionTermina(e){
        console.log('Terminado!');
        console.log(e);
    }
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
