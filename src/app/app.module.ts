import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CrearComponent } from './crear/crear.component';
import { HttpModule} from '@angular/http';
import { LinkifystrPipe} from './pipes/linkifystr.pipe';
const appRoutes: Routes = [
 {path: '', component: LugaresComponent},
 {path: 'lugares', component: LugaresComponent},
 {path: 'detalle/:id', component: DetalleComponent},
 {path: 'contacto', component: ContactoComponent},
 {path: 'crear/:id', component: CrearComponent},
];
export const firebaseConfig = {
  apiKey: "AIzaSyAVafGYw6H2cVUmSZUSseuajqBMfnm2Qrw",
  authDomain: "platzisquare-1506116220932.firebaseapp.com",
  databaseURL: "https://platzisquare-1506116220932.firebaseio.com",
  storageBucket: "platzisquare-1506116220932.appspot.com",
  messagingSenderId: "295418261412"
};
@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    LinkifystrPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA7ONqmJKpGh6AHpYwFWFuOKTTibxFANGE'
    }),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }