import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http: HttpClient) { }
  getBudgetData() {
    return this.http.get('https://reqres.in/api/users')
  }
}
