import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formularioRegistro= this.fg.group({
    email: ['',[Validators.required,Validators.email]],
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    password2: new FormControl('',[Validators.required])
  })
  constructor(public authServ: AuthService, private route: Router,private fg:FormBuilder) { }

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
  getError(field: string): string{
    console.log(field)
    //console.log(this.formularioRegistro.get('password').value)
    //console.log(this.formularioRegistro.get(field).value===this.formularioRegistro.get('password').value)
    let errorMenssage;
    const {email,password,password2}=this.formularioRegistro.value;
    if(this.formularioRegistro.get(field).errors?.required){
      errorMenssage="Ingrese los datos requeridos."
    }else if(this.formularioRegistro.get(field).hasError('minlength')){
      errorMenssage="Ingrese 8 caracteres como minimo."
    }else if(this.formularioRegistro.get(field).hasError('email')){
      errorMenssage="Ingrese un email valido."
    }else if(field=='password2'&&this.formularioRegistro.get(field).value!=this.formularioRegistro.get('password').value){
      errorMenssage="Las Contreseñas no coinsiden."
    }
    return errorMenssage;
  }
  campoValido(field: string): boolean{
    return(this.formularioRegistro.get(field).touched || this.formularioRegistro.get(field).dirty && this.formularioRegistro.get(field).valid);
  }

}
