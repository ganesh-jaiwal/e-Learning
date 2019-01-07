import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import {Ingredients} from '../../shared/ingredients.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editingIngredient: Ingredients;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editMode = true;
          this.editedItemIndex = index;
          this.editingIngredient = this.shoppingListService.getIngredient(index);
          this.slForm.setValue({
            'name': this.editingIngredient.name,
            'amount': this.editingIngredient.amount
          });
        }
      );
  }
  onSubmit(form: NgForm) {
    // const ingName = this.inputNameRef.nativeElement.value;
    // const ingAmount = this.inputAmountRef.nativeElement.value;
    const values = form.value;
    const newIngredient = new Ingredients(values.name, values.amount);
    // this.ingredientAdded.emit(newIngredient);
    if (this.editMode === false) {
      this.shoppingListService.addIngredient(newIngredient);
    } else {
      this.shoppingListService.updateIngredient(newIngredient, this.editedItemIndex);
    }
    this.editMode = false;
    form.reset();
  }
  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
