import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//FireBase Modules

//import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuth, AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireStorageModule} from "@angular/fire/storage";
import { AngularFireModule } from "@angular/fire";
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
