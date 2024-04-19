import { Component } from '@angular/core';
import { ApiService } from '../servies/api.service';
import { Router , RouterLink, RouterOutlet } from '@angular/router';
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeSearchComponent } from "./recipe-search/recipe-search.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RecipeListComponent, RecipeSearchComponent,RouterOutlet, RouterLink]
})
export class HomeComponent {

}
