import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItem: Ingredient;
  @ViewChild('f', {static: false}) slForm: NgForm;
  editedItemIndex: number;
  // @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  // @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private shoppingService: ShoppingListService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.shoppingService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoppingService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  onSubmit(form: NgForm) {
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
    // this.ingredientAdded.emit(ing);
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingService.deleteIngredient(this.editedItemIndex);
    this.slForm.reset();
    this.editMode = false;
  }

}
