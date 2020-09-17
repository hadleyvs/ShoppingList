import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs';
import { DataSTorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipie.service';

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {
    constructor(private dataStoregeService: DataSTorageService, private recipeService: RecipeService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        const recipes = this.recipeService.getRecipies();
        if (recipes.length === 0) {
            return this.dataStoregeService.fetchRecipes();
        } else {
            return recipes;
        }
    }

}
