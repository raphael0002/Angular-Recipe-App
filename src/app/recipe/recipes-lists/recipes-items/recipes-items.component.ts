import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit} from '@angular/core';
import { FoodRecipe } from '../../recipe.model';
import { RouterLink } from '@angular/router';
import { DataStorageServiceTsService } from '../../../shared/data-storage.service.ts.service';

@Component({
  selector: 'app-recipes-items',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './recipes-items.component.html',
  styleUrl: './recipes-items.component.css',
  providers:[DataStorageServiceTsService]
})
export class RecipesItemsComponent implements OnInit{
  
  @Input() recipe: FoodRecipe;
  @Input() index: number;


  ngOnInit(): void {
    
    }
}
