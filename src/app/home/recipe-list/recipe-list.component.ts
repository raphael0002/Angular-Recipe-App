import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servies/api.service';
import { Router, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { RecipeSearchComponent } from "../recipe-search/recipe-search.component";

@Component({
    selector: 'app-recipe-list',
    standalone: true,
    templateUrl: './recipe-list.component.html',
    styleUrl: './recipe-list.component.css',
    imports: [NgFor, RouterOutlet, RecipeSearchComponent]
})
export class RecipeListComponent implements OnInit{
  recipes:any[] = [];

  constructor(private apiService:ApiService){ }
  ngOnInit(): void {
    this.apiService.recipes$.subscribe(recipes => {
      this.recipes = recipes;
  });
  }
  
}
