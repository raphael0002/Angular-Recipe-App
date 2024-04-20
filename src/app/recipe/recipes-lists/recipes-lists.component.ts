import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipesItemsComponent } from "./recipes-items/recipes-items.component";
import { FoodRecipe } from '../recipe.model';
import { CommonModule, NgFor } from '@angular/common';

@Component({
    selector: 'app-recipes-lists',
    standalone: true,
    templateUrl: './recipes-lists.component.html',
    styleUrl: './recipes-lists.component.css',
    imports: [RecipesItemsComponent,NgFor,CommonModule]
})
export class RecipesListsComponent implements OnInit {
    @Output() recipeThatSelected = new EventEmitter();

    recipes: FoodRecipe[] = [
        new FoodRecipe("Chicken Biryani1", "This is simply biryani1", "https://glebekitchen.com/wp-content/uploads/2019/12/chickenbiryanibowltop.jpg"),

        new FoodRecipe("Chicken Biryani", "This is simply biryani", "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken.jpg"),
        new FoodRecipe("Chicken Biryani", "This is simply biryani", "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken.jpg")
    ];


    constructor(){}
    ngOnInit(): void {
    }

    onRecipeSelected(recipe: FoodRecipe){
        this.recipeThatSelected.emit(recipe);
    }

}
