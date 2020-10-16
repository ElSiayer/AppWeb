import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formularioRegistro= new FormGroup({
    email: new FormControl('',Validators.email),
    password: new FormControl('',Validators.required),
    password2: new FormControl('',Validators.required),
  });
  constructor(public authServ: AuthService, private route: Router) { }

  ngOnInit(): void {
  }
  onRegister(){
    const {email,password,password2}=this.formularioRegistro.value;
    if(password2==password){
      this.authServ.registerEmail(email,password).then(res=>{       
        if(res){
          console.log("Ingreso exitoso");        
          this.route.navigate(['/']);
        }else{
          this.route.navigate(['/register']);
        };
      }).catch(erorx => console.log("Error: ",erorx));
    }else{
      console.log("Error al validar contraseña:",password2)
    }
    
  }

}
