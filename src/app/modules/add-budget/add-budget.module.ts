import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddBugetComponent } from "src/app/areas/add-buget/add-buget.component";
import { AddCategoriesComponent } from "src/app/areas/add-categories/add-categories.component";
@NgModule({
    declarations:[
        AddBugetComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule, 
    ],
    exports:[
        AddBugetComponent
    ]
})
export class AddBudgetModule{

}