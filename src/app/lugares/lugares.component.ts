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
    this.lugares = lugaresService.getLugares();
  }
}
