import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipesListsComponent } from "./recipes-lists/recipes-lists.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { CommonModule } from '@angular/common';
import { FoodRecipe} from './recipe.model';

@Component({
    selector: 'app-recipe',
    standalone: true,
    templateUrl: './recipe.component.html',
    styleUrl: './recipe.component.css',
    imports: [FormsModule, RecipesListsComponent, RecipeDetailComponent,CommonModule]
})
export class RecipeComponent implements OnInit {
  selectedRecipe: FoodRecipe;

  @ViewChild('myModal') modal!: ElementRef;
  Recipe : Recipe = new Recipe();
  recipeList: Recipe[] = [];

  ngOnInit(): void {
    const localData = localStorage.getItem("recipe");
    if(localData != null) {
      this.recipeList = JSON.parse(localData)
    }
  }

  openModal() {
    this.modal.nativeElement.style.display = 'block';
  }

  closeModal() {
    this.modal.nativeElement.style.display = 'none';
  }

  // Close modal when clicking outside of it
  onClickOutsideModal(event: Event) {
    if (event.target === this.modal.nativeElement) {
      this.closeModal();
    }
  }
  addRecipe() {
    const isLocalPresent = localStorage.getItem("recipe");
    if (isLocalPresent != null) {
      
      const oldArray = JSON.parse(isLocalPresent);
      this.Recipe.id = oldArray.length + 1;
      oldArray.push(this.Recipe);
      this.recipeList = oldArray;
      localStorage.setItem('recipe', JSON.stringify(oldArray));
    } else {
      const newArr = [];
      newArr.push(this.Recipe);
      this.Recipe.id = 1;
      this.recipeList = newArr;
      localStorage.setItem('recipe', JSON.stringify(newArr));
    }
    this.closeModal()
  }

  onDelete(item: Recipe) {
    const isDelet = confirm("Are you sure want to Delete");
    if(isDelet) {
      const currentRecord =  this.recipeList.findIndex(m=> m.id === this.Recipe.id);
      this.recipeList.splice(currentRecord,1);
      localStorage.setItem('recipe', JSON.stringify(this.recipeList));
    }
  }
  onEdit(item: Recipe) {
    this.Recipe =  item;
    this.openModal();
  }

  updateRecipe() {
      const currentRecord =  this.recipeList.find(m=> m.id === this.Recipe.id);
      if(currentRecord != undefined) {
        currentRecord.recipeName = this.Recipe.recipeName;
        currentRecord.ingredients =  this.Recipe.ingredients;
        currentRecord.instruction =  this.Recipe.instruction;
      };
      localStorage.setItem('recipe', JSON.stringify(this.recipeList));
      this.closeModal()
  }
}

export class Recipe{
  id:number;
  recipeName: string;
  ingredients: string;
  instruction: string

  constructor(){
    this.id = 0 ;
    this.recipeName = "";
    this.ingredients = "";
    this.instruction = "";
  }
}
