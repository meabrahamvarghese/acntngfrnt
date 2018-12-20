import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BudgetService {

    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) {}
    getBudgetData() {
        let url = this.baseUrl + 'budget';
        //url='https://reqres.in/api/users';
        return this.http.get(url);
    }
}
