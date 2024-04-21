import { Injectable } from '@angular/core';
import { RecipesService } from '../servies/recipes.service';
import { HttpClient } from '@angular/common/http';
import { FoodRecipe } from '../recipe/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageServiceTsService {

  constructor(private http: HttpClient, private recipesService: RecipesService) {}

    storeRecipes() {
        const recipes = this.recipesService.getRecipes();
        this.http.put(
                'https://recipe-app-e4667-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json',
                recipes
            )
            .subscribe(response => {
                console.log(response);
            });
    }

    fetchRecipes() {
        this.http.get<FoodRecipe[]>(
        'https://recipe-app-e4667-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json'
        )
        .subscribe(recipes => {
            console.log(recipes);
            this.recipesService.setRecipes(recipes);
        })

    }
}
