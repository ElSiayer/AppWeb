import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from "@angular/forms";
import { AuthService } from '../../auth/services/auth.service';
import { PostService } from "../../../shared/post.service"
import { KeyedRead } from '@angular/compiler';
import { Z_DATA_ERROR } from 'zlib';

interface mostrarCategorias{
  disabled?: boolean,
  nombreCategoria: string,
  subCategoria: string[]
}

@Component({
  selector: 'app-post-photo',
  templateUrl: './post-photo.component.html',
  styleUrls: ['./post-photo.component.css']
})

export class PostPhotoComponent implements OnInit {
  public most=true;
  public segundoSelect=true;
  public inhabilitarBoton=true;
  public oculatarBoton=true;
  private image:any
  public selccion=false;
  public mostrarIMG: String[]=new Array();
  public imgMostrar;
  private categoriaNombre =''
  private subCategoriaNombre=''
  Pathimg:any
  public inputAvailable= true;
  ImgEnviar= new FormGroup({
    categoriaForm:new FormControl(''),
    subcategoriaForm:new FormControl(''),
    img: new FormControl('')
  })  
  public selectCategoria:string []= ['Ropa','Moda','Accesorios','Zapatos','Joyas','Decoración']
  public selectSubCategoria:string []


  constructor(public authServ: AuthService,private postServ: PostService) { }
  async upLoadImg(){
      const a =this.ImgEnviar.value;
      console.log(a.categoriaForm)
      console.log(this.ImgEnviar.value)
      console.log(a.img)
      console.log(this.postServ.imgURL)  
      //await this.postServ.uploadPhoto(this.image, name)
      this.imgMostrar=''
      //this.inicio()    
  }
  fecha(){
    var date=new Date()
    let pathDate=date.getDate()+"_"+date.getMonth()+"_"+date.getFullYear()+"_"+date.getHours()+"_"+date.getMinutes()+"_"+date.getSeconds()
    return pathDate
  }
  mostrarSubcategorias(event){    
    this.segundoSelect=false;
    this.oculatarBoton=true;
    this.categoriaNombre=event.value;
    console.log(this.categoriaNombre);
    
    if(['Ropa','Moda','Accesorios','Zapatos'].includes(this.categoriaNombre)){
      this.selectSubCategoria=['Hombre','Mujer']
    }else if(this.categoriaNombre == 'Decoración') {
      this.selectSubCategoria=['Pintura','Muebles','Decoración']
    }else{
      this.segundoSelect=true;    
    }
  }
  seleccionSubcategoria(event){
    this.subCategoriaNombre=event.value;
    if(this.categoriaNombre=='Decoración'){
      console.log(this.categoriaNombre+"/"+this.subCategoriaNombre)
    }else if(['Ropa','Moda','Accesorios','Zapatos'].includes(this.categoriaNombre)){
      console.log(this.subCategoriaNombre+"/"+this.categoriaNombre)
    }else{
      console.log(this.categoriaNombre)
    }
    
    this.inputAvailable=false;
  }

  inicio(){
    this.most=true;
    this.segundoSelect=true;
    this.inhabilitarBoton=true;
    this.oculatarBoton=true;  
    this.selccion=false;
    this.inputAvailable= true;
    this.subCategoriaNombre=''
    this.categoriaNombre=''
  }
  eliminar(i){    
        this.mostrarIMG.splice(i,1);
        this.inputAvailable=false;
        if(this.mostrarIMG.length>1){
          this.inhabilitarBoton=false;
        }else{
          this.inhabilitarBoton=true;
        }
        if(this.mostrarIMG.length==0){
          this.inicio()
        }
  }
  handelImg(event:any):void{
    this.selccion=true;
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      this.image=event.target.files[0];
      reader.onload = (event:any) => {        
        if(this.mostrarIMG.length<3){
          this.oculatarBoton=false
          this.mostrarIMG.push(event.target.result);
          this.most=false          
        }else{
          this.most=true
          
        }      
       }
       if(this.mostrarIMG.length==2){
        this.inputAvailable=true;
       }
       reader.readAsDataURL(event.target.files[0]);}
       if(this.mostrarIMG.length>0){
        this.inhabilitarBoton=false;
      }else{
        this.inhabilitarBoton=true;
      }      
  }

  ngOnInit(): void { 
    
  }
  

}
