import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeSearchComponent } from './home/recipe-search/recipe-search.component';
import { RecipeListComponent } from './home/recipe-list/recipe-list.component';

export const routes: Routes = [
    // { path: '', redirectTo: '/search', pathMatch: 'full' },

    {
        path: "home",
        component:HomeComponent
    },
    {
        path: "recipe",
        component:RecipeComponent
    },
    // { path: 'search', component: RecipeSearchComponent },
    // { path: 'recipes', component: RecipeListComponent }
];
