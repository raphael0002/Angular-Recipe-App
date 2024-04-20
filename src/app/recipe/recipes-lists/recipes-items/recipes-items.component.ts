import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-items',
  standalone: true,
  imports: [NgFor],
  templateUrl: './recipes-items.component.html',
  styleUrl: './recipes-items.component.css'
})
export class RecipesItemsComponent{
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter();

  onSelected(){
    this.recipeSelected.emit();
  }
}
