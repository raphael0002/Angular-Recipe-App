import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeSearchComponent } from './home/recipe-search/recipe-search.component';
import { RecipeListComponent } from './home/recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: "home",
        component:HomeComponent
    },
    {
        path: "recipe",
        component:RecipeComponent,
        children:[
            {path:'', component:RecipeStartComponent},
            {path:'new', component:RecipeEditComponent},
            {path: ':id' , component:RecipeDetailComponent},
            {path: ':id/edit' , component:RecipeEditComponent}
        ]
    },
    // { path: 'search', component: RecipeSearchComponent },
    // { path: 'recipes', component: RecipeListComponent }
];
