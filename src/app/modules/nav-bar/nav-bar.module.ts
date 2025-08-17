import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavigationBarComponent } from "src/app/areas/navigation-bar/navigation-bar.component";
@NgModule({
    declarations:[
        NavigationBarComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports:[
        NavigationBarComponent
    ]
})
export class NavigationBarModule{

}