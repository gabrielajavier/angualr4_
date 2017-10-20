import { Component } from '@angular/core';
import {AutorizacionService} from "../services/autorizacion.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})


export class LoginComponent {
	loginParams:any = {}
	constructor(private autorizacionServices:AutorizacionService){
		
	}
	login(){
		this.autorizacionServices.login(this.loginParams.email, this.loginParams.password);
	}
}
