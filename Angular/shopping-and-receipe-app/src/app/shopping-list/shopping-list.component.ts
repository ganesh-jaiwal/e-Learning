import { Component, OnInit } from '@angular/core';
import {ShoppingListService} from './shopping-list.service';
import {Ingredients} from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[];
  constructor(private shoppingListService: ShoppingListService) { }
  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.onIngredientsChanged
      .subscribe(
        (ingredients: Ingredients[]) => {
          this.ingredients = ingredients;
        }
      );
  }
  onEditIngredient(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
