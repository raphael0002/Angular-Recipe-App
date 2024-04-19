import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servies/api.service';
import { Router, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [NgFor,RouterOutlet],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
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
