import {Subject} from 'rxjs';

import {Ingredients} from '../shared/ingredients.model';

export class ShoppingListService {
  onIngredientsChanged = new Subject<Ingredients[]>();
  startedEditing = new Subject<number>();
  private ingredients = [
    new Ingredients('Apple', 5),
    new Ingredients('Tomatoes', 10)
  ];

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.onIngredientsChanged.next(this.ingredients.slice());
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredients[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.onIngredientsChanged.next(this.ingredients.slice());
  }
  updateIngredient(ingredient: Ingredients, index: number) {
    this.ingredients[index] = ingredient;
    this.onIngredientsChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index: number) {
    console.log(index);
    this.ingredients.splice(index, 1);
    this.onIngredientsChanged.next(this.ingredients.slice());
  }
}
