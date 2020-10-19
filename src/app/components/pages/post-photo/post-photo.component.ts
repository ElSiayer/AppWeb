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
  public imgMostrar;
  ImgEnviar= new FormGroup({
    name: new FormControl(''),
    img: new FormControl('')
  })

  constructor(public authServ: AuthService,private postServ: PostService) { }
  upLoadImg(){
    const{name, img}=this.ImgEnviar.value;
    console.log(img)
    
    //this.postServ.uploadPhoto(this.image,name)
    
    console.log(this.image)
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
