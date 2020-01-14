import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    constructor(private sLService: ShoppingListService) {

    }
    recipeSelected = new EventEmitter<Recipe>();

    private recipies: Recipe[] = [
        new Recipe('Biriyani', 'Test Recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('Chicken', 1),
                new Ingredient('Elachi', 2)
            ]),
        new Recipe('Mandi', 'Another Test Recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('Pepper', 10),
                new Ingredient('Beef', 2)
            ])
    ];

    getRecipies() {
        return this.recipies.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.sLService.addIngredients(ingredients);
    }
}
