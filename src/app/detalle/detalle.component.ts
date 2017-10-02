import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
})

/* PROBANDO ROUTER */
export class DetalleComponent {
	lugares:any = [
    {id: 1, plan: "pagado", cercania: 1, distancia: 1, active:true, nombre:'Florería la gardemia', description: 'Descripción de este negocio. Más adelante tendremos más información'},
    {id: 2, plan: "gratuito", cercania: 1, distancia: 1.5, active:true, nombre:'Donas la pasadita', description: 'Descripción de este negocio. Más adelante tendremos más información'},
    {id: 3, plan: "pagado", cercania: 2, distancia: 5, active:true, nombre:'Veterinaria Huellitas felices', description: 'Descripción de este negocio. Más adelante tendremos más información'},
    {id: 4, plan: "gratuito", cercania: 3, distancia: 10, active:false, nombre:'Sushi Suhiroll', description: 'Descripción de este negocio. Más adelante tendremos más información'},
    {id: 5, plan: "pagado", cercania: 3, distancia: 35, active:true, nombre:'Hotel la Gracia', description: 'Descripción de este negocio. Más adelante tendremos más información'},
    {id: 6, plan: "gratuito", cercania: 3, distancia: 120, active:true, nombre:'Zapatería el Clavo', description: 'Descripción de este negocio. Más adelante tendremos más información'}
  ];
  id = null;
  lugar: any = {};
	constructor (private route: ActivatedRoute){
		console.log(this.route.snapshot.params['id']);
		console.log(this.route.queryParams['action2']);
		console.log(this.route.queryParams['referer']);
		this.id = this.route.snapshot.params['id'];
		this.lugar = this.buscarlugar();
	}
	buscarlugar(){
		return this.lugares.filter((lugar) => { return lugar.id == this.id})[0] || null;
	}
}
