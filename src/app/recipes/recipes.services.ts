import { Recipe } from "./recipe.model";


export class RecipesService{
  private recipes: Recipe[] = [
    new Recipe('sample recipe', 'a test recipe descriptor (Japanese Cheesecake)', 'https://www.justonecookbook.com/wp-content/uploads/2019/11/Japanese-Cheesecake-4631-I-500x500.jpg'),
    new Recipe('a second recipe', 'the second recipe descriptor (Squash Soup)', 'https://www.jessicagavin.com/wp-content/uploads/2020/11/acorn-squash-soup-14-1200.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
