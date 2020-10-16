import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioIngreso= new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(public authServ: AuthService, private route: Router) { }

  ngOnInit(): void {
  }
  onLogIn(){
    const {email,password}=this.formularioIngreso.value;
    this.authServ.loginEmail(email,password).then(res=>{       
      if(res){
        console.log("Ingreso exitoso");        
        this.route.navigate(['/']);
      };
    }).catch(erorx => console.log("Error: ",erorx));
  }
  async onLogInWithGoogle(){
    try {
      this.authServ.loginGoogle().then(res=>{ 
        console.log("Ingreso exitoso");
        if(res){        
          this.route.navigate(['/']);
        };
      });
        
    } catch (error) {
      console.log(error);
    } 

  }
  

}
