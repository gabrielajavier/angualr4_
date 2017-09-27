import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']

})

/* PROBANDO ROUTER */
export class LugaresComponent {
  title = 'PlatziSquare';
  lugares:any = [
    {plan: "pagado", cercania: 1, distancia: 1, active:true, nombre:'Florería la gardemia'},
    {plan: "gratuito", cercania: 1, distancia: 1.5, active:true, nombre:'Donas la pasadita'},
    {plan: "pagado", cercania: 2, distancia: 5, active:true, nombre:'Veterinaria Huellitas felices'},
    {plan: "gratuito", cercania: 3, distancia: 10, active:false, nombre:'Sushi Suhiroll'},
    {plan: "pagado", cercania: 3, distancia: 35, active:true, nombre:'Hotel la Gracia'},
    {plan: "gratuito", cercania: 3, distancia: 120, active:true, nombre:'Zapatería el Clavo'}
  ];

  lat:number= -12.0482677;
  lng:number= -77.0453564;

  constructor(){
  }
}
