import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list-service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipesService{
  recipesChanged = new Subject<Recipe[]>()

  private recipes: Recipe[] = [
    new Recipe(
      'Japanese Cheesecake',
      'a lovely fluffy cheesecake - Japanese style!',
      'https://www.justonecookbook.com/wp-content/uploads/2019/11/Japanese-Cheesecake-4631-I-500x500.jpg',
      [
        new Ingredient('unsalted butter', 1),
        new Ingredient('eggs', 1),
        new Ingredient('cream cheese', 2),
        new Ingredient('heavy whipping cream', 1),
        new Ingredient('granulated sugar', 1),
        new Ingredient('cake clour', 1),
        new Ingredient('lemon', 1),
        new Ingredient('apricot jam', 1),
      ]),
    new Recipe(
      'Squash Soup',
      'warm and cool and cozy squash soup',
      'https://www.jessicagavin.com/wp-content/uploads/2020/11/acorn-squash-soup-14-1200.jpg',
      [
        new Ingredient('butternut squash', 1),
        new Ingredient('olive oil - tablespoon', 1),
        new Ingredient('chopped shallot - 1/2 cup', 1),
        new Ingredient('garlic cloves', 4),
        new Ingredient('maple syrup', 1),
        new Ingredient('ground nutmeg', 1),
        new Ingredient('ground black pepper', 1),
        new Ingredient('vegetable broth', 3),
        new Ingredient('butter', 1),
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index);
    this.recipesChanged.next(this.recipes.slice());
  }
}
