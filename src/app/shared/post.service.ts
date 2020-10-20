import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore'
import { AngularFireStorage } from "@angular/fire/storage";
import { FileImg  } from "../shared/models/PostImg.interface";
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  public ArrayImg: String[]=new Array()
  public Pathimg: any;
  public imgURL:any;
  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) {}
  public async uploadPhoto(img,name){
    this.Pathimg=`images/${name}`;
    const filePath = this.storage.ref(this.Pathimg);
    const uploadTask= this.storage.upload(this.Pathimg,img);
    const p = await uploadTask.snapshotChanges().pipe(finalize(()=>{
      filePath.getDownloadURL().subscribe(urlimg=>{
        this.imgURL= urlimg;
        this.ArrayImg.push(urlimg)
        console.log(this.imgURL)
      })
    })).subscribe();
    return (this.imgURL)
  }
}
