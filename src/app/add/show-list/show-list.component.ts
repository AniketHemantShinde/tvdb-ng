import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {

  @Input() shows: Object;
  constructor() { }

  ngOnInit() {
  }

}
