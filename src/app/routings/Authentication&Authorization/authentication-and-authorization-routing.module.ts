import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationAndAuthorizationComponent } from "src/app/areas/Authentication&Authorization/authentication-and-authorization/authentication-and-authorization.component";

const routes:Routes=[
        {
            path:"",
            component:AuthenticationAndAuthorizationComponent
        }
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AuthAndAuthorizationRoutingModule{

}