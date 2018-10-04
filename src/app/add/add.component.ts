import { Component, OnInit } from '@angular/core';
import { ShowService } from '../show.service';
// import { ShowService } from '../show.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  isDisabled: Boolean = true;
  // dynamicUrl: String = 'https://www.google.com';
  showName: String;
  shows$: Object; 

  constructor(private show: ShowService) {
    // var component = this;

    // setTimeout(function () {
    //   console.log('component', component)
    //   console.log('this', this)
    //   component.isDisabled = false;
    // }, 3000)

    // setTimeout(function () {
    //   component.dynamicUrl = 'https://www.yahoo.com';

    // }, 7000)
  }

  // search() {
  //   console.log("Searching")
  //   this.show.getShowList(this.showName).subscribe((data)=>{ this.shows$ = data['data'] })
  // }
  // print() {
  //   console.log("Print")
  // }

  ngOnInit() {
  }

  updateSearch(event){
    this.show.getShowList(event.showName).subscribe((data)=>this.shows$ = data['data']);
  }

}
