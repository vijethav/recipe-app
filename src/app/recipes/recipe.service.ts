import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private   recipes: Recipe[] = [
    new Recipe('Test Recipe',
    'A simple Test Recipe',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/1199px-Recipe-575434.svg.png',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Apple', 10)
    ]
  ),

    new Recipe('Test Recipe simple',
          'A simple Test Recipe',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/1199px-Recipe-575434.svg.png',
  [
    new Ingredient('Meat', 1),
    new Ingredient('Banana', 2)
  ])

  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.shoppingListService.addIngredients(ingredients);
  }
}
