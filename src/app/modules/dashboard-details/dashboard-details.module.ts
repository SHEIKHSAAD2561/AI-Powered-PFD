import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DashboardDetailsComponent } from "src/app/areas/dashboard-details/dashboard-details.component";

@NgModule({
    declarations:[
        DashboardDetailsComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports:[
        DashboardDetailsComponent
    ]
})
export class DashboardDetailModule{

}