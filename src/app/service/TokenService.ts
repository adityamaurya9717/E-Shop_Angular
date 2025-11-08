import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class TokenService {


    public  getToken():string{
        return localStorage.getItem('token') || ''
    }

    public  setToken(token:string):void{
        localStorage.setItem('token',token);
    }

    public isLoggedIn():boolean{
        const token = this.getToken();
        console.log("Token found : ", token)
        // if(token==null || token=='' || token==undefined){
        //     return false;
        // }
        return true;
    }

}