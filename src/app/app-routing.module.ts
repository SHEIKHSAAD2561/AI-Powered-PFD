import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './areas/home/home/home.component';

const routes: Routes = [
  {
    path:"auth-and-authorization",
    loadChildren :() => import ("./modules/Authentication&Authorization/authentication-and-authorization.module").then((m)=> m.AuthenticationAndAuthorizationModule)
  },
  {
    path:'', component:HomeComponent, pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
