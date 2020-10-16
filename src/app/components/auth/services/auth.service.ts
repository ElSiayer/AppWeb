import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 
  
  userData: any
  constructor(private afauth: AngularFireAuth) {
    this.userData= afauth.authState
   }

   async loginGoogle(){
    try {
      return await this.afauth.signInWithPopup(new auth.GoogleAuthProvider());
    } catch (error) {
      console.log(error)
    }
   }

   async loginEmail(email: string,password: string){
    try {
      return await this.afauth.signInWithEmailAndPassword(email,password);
    } catch (error) {
      console.log(error)
    }
  }

  async registerEmail(email: string,password: string){
    try {
      return await this.afauth.createUserWithEmailAndPassword(email,password);
    } catch (error) {
      console.log(error)
    }
  }

  async logout(){
    await this.afauth.signOut();
  }
}
