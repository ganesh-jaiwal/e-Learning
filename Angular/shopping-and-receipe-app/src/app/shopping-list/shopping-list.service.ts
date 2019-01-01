import {Ingredients} from '../shared/ingredients.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  onIngredientsChanged = new EventEmitter<Ingredients[]>();
  private ingredients = [
    new Ingredients('Apple', 5),
    new Ingredients('Tomatoes', 10)
  ];

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.onIngredientsChanged.emit(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredients[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.onIngredientsChanged.emit(this.ingredients.slice());
  }
}
