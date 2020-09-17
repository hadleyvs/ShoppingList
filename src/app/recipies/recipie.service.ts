import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    constructor(private sLService: ShoppingListService) {

    }
    // recipeSelected = new EventEmitter<Recipe>();

    private recipies: Recipe[] = [];
    // private recipies: Recipe[] = [
    //     new Recipe('Biriyani', 'Test Recipe', 'https://cdn.pixabay.com/photo/2017/11/06/07/21/clay-2922934_960_720.png',
    //         [
    //             new Ingredient('Chicken', 1),
    //             new Ingredient('Elachi', 2)
    //         ]),
    //     new Recipe('Mandi', 'Another Test Recipe', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Mandi.PNG/220px-Mandi.PNG',
    //         [
    //             new Ingredient('Pepper', 10),
    //             new Ingredient('Beef', 2)
    //         ])
    // ];

    setRecipies(recipes: Recipe[]) {
        this.recipies = recipes;
        this.recipesChanged.next(this.getRecipies());
    }

    getRecipe(index: number) {
        return this.recipies[index];
    }

    getRecipies() {
        return this.recipies.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.sLService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipies.push(recipe);
        this.recipesChanged.next(this.getRecipies());
    }

    updateRecipe(index: number, newrecipe: Recipe) {
        this.recipies[index] = newrecipe;
        this.recipesChanged.next(this.getRecipies());
    }

    deleteRecipe(index: number) {
        this.recipies.splice(index, 1);
        this.recipesChanged.next(this.getRecipies());
    }
}
