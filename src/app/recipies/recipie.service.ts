import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    constructor(private sLService: ShoppingListService) {

    }
    // recipeSelected = new EventEmitter<Recipe>();

    private recipies: Recipe[] = [
        new Recipe('Biriyani', 'Test Recipe', 'https://cdn.pixabay.com/photo/2017/11/06/07/21/clay-2922934_960_720.png',
            [
                new Ingredient('Chicken', 1),
                new Ingredient('Elachi', 2)
            ]),
        new Recipe('Mandi', 'Another Test Recipe', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Mandi.PNG/220px-Mandi.PNG',
            [
                new Ingredient('Pepper', 10),
                new Ingredient('Beef', 2)
            ])
    ];

    getRecipe(index: number) {
        return this.recipies[index];
    }

    getRecipies() {
        return this.recipies.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.sLService.addIngredients(ingredients);
    }
}
