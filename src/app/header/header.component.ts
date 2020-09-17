import { Component } from '@angular/core';
import { DataSTorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(private dataStorageService: DataSTorageService) { }
    // @Output() featureSelected = new EventEmitter<string>();
    // onSelect(feature: string) {
    //     this.featureSelected.emit(feature);
    // }

    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    fetchRecipes() {
        this.dataStorageService.fetchRecipes().subscribe();
    }
}
