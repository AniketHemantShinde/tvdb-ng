import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { ShowService } from '../../show.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  @Output() searchTermChanged: EventEmitter<Object> = new EventEmitter<Object>();
	shows$: Object;
	showName: String

  constructor() { }

  ngOnInit() {
  }
  searchShow(){
    this.searchTermChanged.emit({showName: this.showName}); 
  }
}
