import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipies/recipie.service';
import { Recipe } from '../recipies/recipe.model';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataSTorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {
    }

    storeRecipes() {
        const recipes = this.recipeService.getRecipies();
        this.http.put('https://recipe-book-21ea3.firebaseio.com/recipes.json', recipes).subscribe(response => {
            console.log(response);
        });
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>('https://recipe-book-21ea3.firebaseio.com/recipes.json')
            .pipe(map(recipes => {
                return recipes.map(recipe => {
                    return {
                        ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []
                    };
                });
            }),
                tap(recipes => {
                    this.recipeService.setRecipies(recipes);
                })
            );
    }
}
