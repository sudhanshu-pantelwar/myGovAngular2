import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GovtService{
    govtData: any;
    constructor(private http: Http){
        console.log('GovtService Initialized');
    }

    putData(data:any){
       let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let body = 'data='+JSON.stringify(data);
    console.log(body);
    return this.http.post('http://localhost:8000/getTodo',body, options)
    .map(res => JSON.stringify(res));
    }

    getData()
    {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:8000/putTodo', options)
    .map(res => res.json());
    //.map(res => JSON.parse(res));

    
    }
}