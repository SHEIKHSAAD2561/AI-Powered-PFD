import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterUserComponent } from "src/app/areas/register-user/register-user.component";
import { AuthAndAuthorizationRoutingModule } from "src/app/routings/Authentication&Authorization/authentication-and-authorization-routing.module";
import { RegisterUserRoutingModule } from "src/app/routings/register/register-user-routing.module";
import { NavigationBarModule } from "../nav-bar/nav-bar.module";

@NgModule({
    declarations:[
        RegisterUserComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RegisterUserRoutingModule,
        NavigationBarModule
    ],
    exports:[
        RegisterUserComponent
    ]
})
export class RegisterUserModule{

}