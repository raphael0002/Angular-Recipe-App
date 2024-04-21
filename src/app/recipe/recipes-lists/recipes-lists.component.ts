import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipesItemsComponent } from "./recipes-items/recipes-items.component";
import { FoodRecipe } from '../recipe.model';
import { CommonModule, NgFor } from '@angular/common';
import { RecipesService } from '../../servies/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageServiceTsService } from '../../shared/data-storage.service.ts.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-recipes-lists',
    standalone: true,
    templateUrl: './recipes-lists.component.html',
    styleUrl: './recipes-lists.component.css',
    imports: [RecipesItemsComponent,NgFor,CommonModule,HttpClientModule],
    providers:[DataStorageServiceTsService]
})
export class RecipesListsComponent implements OnInit {
    recipes: FoodRecipe[] = [];

  constructor(private recipeService: RecipesService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageServiceTsService) {
}
  onSaveData() {
    this.dataStorageService.storeRecipes();
  }
  
  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }

  ngOnInit() {
    this.recipeService.recipesChanged
      .subscribe(
        (recipes: FoodRecipe[]) => {
          this.recipes = recipes;
        }
      );
      
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
