import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('sample recipe', 'a test recipe descriptor (Japanese Cheesecake)', 'https://www.justonecookbook.com/wp-content/uploads/2019/11/Japanese-Cheesecake-4631-I-500x500.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
