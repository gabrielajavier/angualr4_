import { Component } from '@angular/core';
import {LugaresService} from "../services/lugares.service";

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']

})

/* PROBANDO ROUTER */
export class LugaresComponent {
  title = 'PlatziSquare';

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
