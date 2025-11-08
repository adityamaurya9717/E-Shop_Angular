import { Injectable } from "@angular/core";

import {environment} from '../environments/environment'
import { HttpClient } from "@angular/common/http";


@Injectable(  {
         providedIn: 'root'
  })
export class TestService{


    constructor (private http:HttpClient){

    
    }

    public  test(){
        const url = "https://jsonplaceholder.typicode.com/posts"

        let result = null;

        this.http.get(url).subscribe(
            {
                next: (res) => {
                    result = res;
                    console.log(res)
                  },
                error: (err) => console.error(err)
            }  
         );
         return result;


    }


}