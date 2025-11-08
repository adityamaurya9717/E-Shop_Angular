import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {


  constructor(private httpclient:HttpClient){
  
  }

  public get(url:string):Observable<any>{
   return this.httpclient.get(url)
    
  }

  public post(url:string,body:any):Observable<any>{
   return this.httpclient.post(url,body)
    
  }
  
}
