import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Injectable()
export class WikipediaService {

    private url = 'http://jsonplaceholder.typicode.com/comments?postId=1'
    error: any;
    constructor(private http: Http) { }

    getClubs(): Observable<any[]>{
        const headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
        const options = new RequestOptions({ headers: headers });
        
        return this.http.get(this.url, options).map(
            (response: Response) => <any[]> response.json())
            .do(data => console.log(data))
            .catch(this.error);

    }
}