import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../servies/api.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recipe-search',
  standalone: true,
  imports: [FormsModule,RouterOutlet],
  templateUrl: './recipe-search.component.html',
  styleUrl: './recipe-search.component.css'
})
export class RecipeSearchComponent {
  query:string='';

  constructor(private apiService:ApiService, private router:Router ){}

  searchRecipes(){
    this.apiService.searchRecipes(this.query);

    this.router.navigate(['/recipes'])
  }
}
