import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChartModule } from "primeng/chart";
import { ProgressBarModule } from "primeng/progressbar";
import { TableModule } from "primeng/table";
import { DashboardDetailsComponent } from "src/app/areas/dashboard-details/dashboard-details.component";
@NgModule({
    declarations:[
        DashboardDetailsComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule, 
        ChartModule,
        ProgressBarModule,
        TableModule,
        ChartModule,
    ],
    exports:[
        DashboardDetailsComponent
    ]
})
export class DashboardDetailModule{

}