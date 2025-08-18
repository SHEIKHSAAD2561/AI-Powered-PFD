import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthenticationAndAuthorizationComponent } from "src/app/areas/Authentication&Authorization/authentication-and-authorization/authentication-and-authorization.component";
import { AuthAndAuthorizationRoutingModule } from "src/app/routings/Authentication&Authorization/authentication-and-authorization-routing.module";
import { NavigationBarModule } from "../nav-bar/nav-bar.module";
import { DashboardComponent } from "src/app/areas/dashboard/dashboard.component";
import { DashboardRoutingModule } from "src/app/routings/dashboard/dashboard-routing.module";
import { DashboardDetailModule } from "../dashboard-details.module.ts/dashboard-details.module";
import { AddCategoriesModule } from "../add-categories/add-categories.module";
import { AddBudgetModule } from "../add-budget/add-budget.module";



@NgModule({
    declarations:[
        DashboardComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DashboardRoutingModule,
        NavigationBarModule,
        DashboardDetailModule,
        AddCategoriesModule,
        AddBudgetModule
    ],
    exports:[
        DashboardComponent
    ]
})
export class DashboardModule{

}