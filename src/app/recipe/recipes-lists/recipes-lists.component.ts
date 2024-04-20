import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipesItemsComponent } from "./recipes-items/recipes-items.component";
import { Recipe } from '../recipe.model';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-recipes-lists',
    standalone: true,
    templateUrl: './recipes-lists.component.html',
    styleUrl: './recipes-lists.component.css',
    imports: [RecipesItemsComponent,NgFor]
})
export class RecipesListsComponent implements OnInit {
    @Output() recipeThatSelected = new EventEmitter();

    recipes: Recipe[] = [
        new Recipe("Chicken Biryani1", "This is simply biryani1", "https://glebekitchen.com/wp-content/uploads/2019/12/chickenbiryanibowltop.jpg"),

        new Recipe("Chicken Biryani", "This is simply biryani", "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken.jpg"),
        new Recipe("Chicken Biryani", "This is simply biryani", "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken.jpg")
    ];

    
    constructor(){}
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    onRecipeSelected(recipe: Recipe){
        this.recipeThatSelected.emit(recipe);
    }

}
