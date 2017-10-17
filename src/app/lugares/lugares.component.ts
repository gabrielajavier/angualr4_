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
        })),
        state('final', style({
           opacity:1,
        })),
        transition('inicial => final', animate(2000)),
        transition('final => inicial', animate(1000)),
      ])
  ]

})

/* PROBANDO ROUTER */
export class LugaresComponent {
  title = 'PlatziSquare';
  state = 'inicial';

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
        this.state = 'final';
        
      }, error => {
        console.log (error);
        alert('Tenemos algo de dificultades, disculpe las molestias. Error: ' + error.statusText)
      });
  }
}
