import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationAndAuthorizationComponent } from './areas/Authentication&Authorization/authentication-and-authorization/authentication-and-authorization.component';
import { AuthenticationAndAuthorizationModule } from './modules/Authentication&Authorization/authentication-and-authorization.module';
import { HomeComponent } from './areas/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationAndAuthorizationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
