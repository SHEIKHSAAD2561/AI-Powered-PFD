import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddCategoriesComponent } from "src/app/areas/add-categories/add-categories.component";
@NgModule({
    declarations:[
        AddCategoriesComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule, 
    ],
    exports:[
        AddCategoriesComponent
    ]
})
export class AddCategoriesModule{

}