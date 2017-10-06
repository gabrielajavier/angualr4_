import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database/database"
@Injectable()
export class LugaresService{
	lugares:any = [
    {id: 1, plan: "pagado", cercania: 1, distancia: 1, active:true, nombre:'Florería la gardemia'},
    {id: 2, plan: "gratuito", cercania: 1, distancia: 1.5, active:true, nombre:'Donas la pasadita'},
    {id: 3, plan: "pagado", cercania: 2, distancia: 5, active:true, nombre:'Veterinaria Huellitas felices'},
    {id: 4, plan: "gratuito", cercania: 3, distancia: 10, active:false, nombre:'Sushi Suhiroll'},
    {id: 5, plan: "pagado", cercania: 3, distancia: 35, active:true, nombre:'Hotel la Gracia'},
    {id: 6, plan: "gratuito", cercania: 3, distancia: 120, active:true, nombre:'Zapatería el Clavo'},
    {id: 7, plan: "gratuito", cercania: 1, distancia: 100, active:true, nombre:'Prueba'},
  ];
  constructor (private afDB:AngularFireDatabase){}
  public getLugares(){
  	return this.lugares;
  }
  public buscarLugar(id){
    return this.lugares.filter((lugar) => { return lugar.id == id})[0] || null;
  }
  public guardarLugar(lugar){
    console.log(lugar);
    this.afDB.database.ref('lugares/1').set(lugar);
  }
}