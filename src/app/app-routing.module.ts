import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) }, 
  { path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) }, 
  { path: 'register', loadChildren: () => import('./components/auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'post-photo', loadChildren: () => import('./components/pages/post-photo/post-photo.module').then(m => m.PostPhotoModule) },
  { path: 'user-post', loadChildren: () => import('./components/pages/user-post/user-post.module').then(m => m.UserPostModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
