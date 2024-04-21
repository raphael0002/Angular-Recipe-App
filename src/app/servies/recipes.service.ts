import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { FoodRecipe } from "../recipe/recipe.model";

@Injectable({
    providedIn:'root'
})
export class RecipesService {
    recipeSelected = new EventEmitter<FoodRecipe>();
    recipesChanged = new EventEmitter<FoodRecipe[]>();

    // private recipes: FoodRecipe[] = [
    //     new FoodRecipe('Chicken Biryani', 'This is simply biryani', 'https://geekrobocook.com/wp-content/uploads/2021/05/Muradabadi-chicken-biryani-1200x900.jpg',[
    //         new Ingredient('Chicken', 1),
    //         new Ingredient('Rice', 20)
    //     ]),
    //     new FoodRecipe('Chicken noodles', 'This is simply noodles', 'https://www.licious.in/blog/wp-content/uploads/2020/12/Sesame-Chicken-Noodles.jpg',[
    //         new Ingredient('Chicken', 1),
    //         new Ingredient('Noodles', 20)
    //     ])
    // ];

    private recipes: FoodRecipe[] = [];

    setRecipes(recipes: FoodRecipe[]) {
        this.recipes = recipes;
        this.recipesChanged.emit(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: FoodRecipe) {
        console.log(recipe);
        this.recipes.push(recipe);
        this.recipesChanged.emit(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: FoodRecipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.emit(this.recipes.slice());
    }
    
    deleteRecipe(index: number) {
        this.recipes.slice(index, 1);
        this.recipesChanged.emit(this.recipes.slice());
    }
}