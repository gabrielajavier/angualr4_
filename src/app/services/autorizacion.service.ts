import {Injectable} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth/auth";
@Injectable()
export class AutorizacionService{
	constructor(private angularFireAuth: AngularFireAuth){

	}
	public login = (email, password) =>{
		console.log('Método de login!');
	}
	public registro = (email, password)=>{
		this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
		.then((response)=>{
			alert('Usuario registrado con éxito!');
			console.log(response);
		})
		.catch((error)=>{
			alert('Un error ha ocurrido');
			console.log(error);
		})
	}
}