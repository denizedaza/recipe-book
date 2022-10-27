import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipesService } from '../recipes/recipes.services';
import { Recipe } from '../recipes/recipe.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipesService
  ) {}

  storeRecipes() {
    const recipe = this.recipeService.getRecipes();
    this.http
      .put(
        'https://recipe-book-d5f15-default-rtdb.firebaseio.com/recipes.json',
        JSON.stringify(recipe)
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    this.http
      .get<Recipe[]>(
        'https://recipe-book-d5f15-default-rtdb.firebaseio.com/recipes.json'
      )
      .subscribe((recipes) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
