import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'A simple Test Recipe',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/1199px-Recipe-575434.svg.png'),
    new Recipe('Test Recipe simple', 'A simple Test Recipe',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/1199px-Recipe-575434.svg.png')

  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
     this.recipeWasSelected.emit(recipe);
  }
}
