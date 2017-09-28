import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
})

/* PROBANDO ROUTER */
export class DetalleComponent {
	constructor (private route: ActivatedRoute){
		console.log(this.route.snapshot.params['id']);
		console.log(this.route.queryParams['action2']);
		console.log(this.route.queryParams['referer']);
	}
}
