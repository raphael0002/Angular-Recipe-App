import { Component, Input, OnInit } from '@angular/core';
import { FoodRecipe } from '../recipe.model';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: FoodRecipe;

  constructor(){}
  ngOnInit(): void {
  }

}
