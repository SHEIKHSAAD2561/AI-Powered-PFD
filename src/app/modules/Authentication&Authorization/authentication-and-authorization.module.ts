import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthenticationAndAuthorizationComponent } from "src/app/areas/Authentication&Authorization/authentication-and-authorization/authentication-and-authorization.component";
import { AuthAndAuthorizationRoutingModule } from "src/app/routings/Authentication&Authorization/authentication-and-authorization-routing.module";

@NgModule({
    declarations:[
        AuthenticationAndAuthorizationComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthAndAuthorizationRoutingModule
    ],
    exports:[
        AuthenticationAndAuthorizationComponent
    ]
})
export class AuthenticationAndAuthorizationModule{

}