import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioIngreso= new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)])
  });
  constructor(public authServ: AuthService, private route: Router) { }
  public er =''
  ngOnInit(): void {
  }
  onLogIn(){
    const {email,password}=this.formularioIngreso.value;
    this.authServ.loginEmail(email,password).then(res=>{       
      if(res){
        console.log("Ingreso exitoso");        
        this.route.navigate(['/']);
        this.er=""
      }else{
        this.er="Datos Incorrectos"
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
  getError(field: string): string{
    
    //console.log(this.formularioRegistro.get('password').value)
    //console.log(this.formularioRegistro.get(field).value===this.formularioRegistro.get('password').value)
    let errorMenssage;
    const {email,password,password2}=this.formularioIngreso.value;
    if(this.formularioIngreso.get(field).errors?.required){
      errorMenssage="Ingrese los datos requeridos."
    }else if(this.formularioIngreso.get(field).hasError('minlength')){
      errorMenssage="Ingrese 8 caracteres como minimo."
    }else if(this.formularioIngreso.get(field).hasError('email')){
      errorMenssage="Ingrese un email valido."
    }
    return errorMenssage;
  }
  campoValido(field: string): boolean{
    return(this.formularioIngreso.get(field).touched || this.formularioIngreso.get(field).dirty && this.formularioIngreso.get(field).valid);
  }
  

}
