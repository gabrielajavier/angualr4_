import { Component } from '@angular/core';
import {AutorizacionService} from "../services/autorizacion.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})


export class RegistroComponent {
	registro:any = {}
	constructor(private autorizacionServices:AutorizacionService){
			
		}
		registrar(){
			this.autorizacionServices.registro(this.registro.email, this.registro.password);
		}
}
