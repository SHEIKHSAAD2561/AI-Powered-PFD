import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './areas/home/home/home.component';

const routes: Routes = [
  {
    path:"auth-and-authorization",
    loadChildren :() => import ("./modules/Authentication&Authorization/authentication-and-authorization.module").then((m)=> m.AuthenticationAndAuthorizationModule)
  },
  {
    path:"register-user",
    loadChildren :() => import ("./modules/register/register-user.module").then((m)=> m.RegisterUserModule)
  },
  {
    path:"dashboard",
    loadChildren :() => import ("./modules/dashboard/dashboard.module").then((m)=> m.DashboardModule)
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
