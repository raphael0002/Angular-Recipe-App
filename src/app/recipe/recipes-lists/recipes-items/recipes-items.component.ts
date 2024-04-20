import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoodRecipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-items',
  standalone: true,
  imports: [NgFor],
  templateUrl: './recipes-items.component.html',
  styleUrl: './recipes-items.component.css'
})
export class RecipesItemsComponent implements OnInit{
  
  @Input() recipe: FoodRecipe;
  @Output() recipeSelected = new EventEmitter();

  ngOnInit(): void {
    
    }
  onSelected(){
    this.recipeSelected.emit();
  }
}
