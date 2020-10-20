import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from "@angular/forms";
import { AuthService } from '../../auth/services/auth.service';
import { PostService } from "../../../shared/post.service"
@Component({
  selector: 'app-post-photo',
  templateUrl: './post-photo.component.html',
  styleUrls: ['./post-photo.component.css']
})

export class PostPhotoComponent implements OnInit {
  public most=false;
  private image:any
  public mostrarIMG:any;
  public imgMostrar;  
  ImgEnviar= new FormGroup({
    name: new FormControl(''),
    img: new FormControl('')
  })

  constructor(public authServ: AuthService,private postServ: PostService) { }
  async upLoadImg(){
    if(this.most){
      const{name, img}=this.ImgEnviar.value;
      console.log(img)
      console.log(this.postServ.imgURL)  
      await this.postServ.uploadPhoto(this.image, name)    
      this.imgMostrar=''
      this.ImgEnviar.reset()
      this.most=false
      this.mostrarIMG=this.postServ.ArrayImg
    }
    
  }
  handelImg(event:any):void{
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      this.image=event.target.files[0];
      reader.onload = (event:any) => { 
        this.imgMostrar= event.target.result;
       }
       this.most=true 
       reader.readAsDataURL(event.target.files[0]);  }      
  }

  ngOnInit(): void { 
  }

}
