import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http: HttpClient) { }

  getShowList(term){
    return this.http.get('http://localhost:3000/api/tvdb?search='+term)
  }
}
