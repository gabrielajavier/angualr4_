import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* PRIMER EJERCICIO */
/*export class AppComponent {
  title = 'PlatziSquare';
  a = 3;
  b = 5;
  listo = false;
  nombre:string= '';
  apellido:string= '';
  edad:string= '';

  constructor(){
  	setTimeout(() =>{
  		this.listo = true;
  	}, 3000)
  }

  hacerAlgo(){
  	alert('Haciendo Algo');
  }
}*/

/* SEGUNDO EJERCICIO */
export class AppComponent {
  title = 'PlatziSquare';
  lugares:any = [
    {cercania: 1, distancia: 1, active:true, nombre:'Florería la gardemia'},
    {cercania: 1, distancia: 1.5, active:true, nombre:'Donas la pasadita'},
    {cercania: 2, distancia: 5, active:true, nombre:'Veterinaria Huellitas felices'},
    {cercania: 3, distancia: 10, active:false, nombre:'Sushi Suhiroll'},
    {cercania: 3, distancia: 35, active:true, nombre:'Hotel la Gracia'},
    {cercania: 3, distancia: 120, active:true, nombre:'Zapatería el Clavo'}
  ];

  lat:number= -12.0482677;
  lng:number= -77.0453564;

  constructor(){
  }
}

/* EJERCICIO MAYORES DE 18 */
/*export class AppComponent {
  title = 'PlatziSquare';
  personas: any = [
    {nombre:'María', edad:'14'},
    {nombre:'Fernando', edad:'25'},
    {nombre:'Elena', edad:'30'},
    {nombre:'Elizabeth', edad:'18'},
    {nombre:'Paola', edad:'20'},
    {nombre:'Gracia', edad:'19'},
    {nombre:'Belén', edad:'10'},
    {nombre:'Rosa', edad:'22'},
    {nombre:'Joselyn', edad:'17'},
  ];
  constructor(){
  }
}*/