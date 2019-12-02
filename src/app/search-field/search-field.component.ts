import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../shared/search.service';
import { ResultsListComponent } from '../result-list/search-field.component.ts';

@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
    searchWord: string;
    gifs: any;

    constructor(private searchService: SearchService) {
    }

    ngOnInit() {
    }

    showGifs() {
        this.searchService.getGifs(this.searchWord).subscribe(
            gif => {
                this.gifs = gif.data;
            },
            error => console.error(error)
        );
    }
}
