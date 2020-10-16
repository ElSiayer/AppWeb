import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/components/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authServ: AuthService) { }
  public usuario: any
  async ngOnInit(){
    this.authServ.userData.subscribe(user =>{
      if(user){console.log( user.email);
        this.usuario=user.email;}
    })
  }
  logOut(){
    this.authServ.logout();
  }

}
