import { Component, OnInit } from '@angular/core';
// import { Recipe } from './recipe.model';
// import { RecipeService } from './recipie.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
  // selectedRecipe: Recipe;
  constructor() {
  }

  ngOnInit() {
    // this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
    //   this.selectedRecipe = recipe;
    // });

  }


}
