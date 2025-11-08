import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { environment, usermoduleEnvironment } from '../../environments/environment';
import { HttpService } from '../../service/http-service';
import { firstValueFrom } from 'rxjs';
import { TokenService } from '../../service/TokenService';
import { Route, Router } from '@angular/router';

declare var google: any;


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private http: HttpService,
    private tokenService: TokenService,
    private router: Router) {

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

  }
  ngOnInit(): void {
    // if(!this.tokenService.isLoggedIn()){
    //   console.log("User not logged in , stay on login page")
    //   this.router.navigate(['login']);
    // }
    // else{
    //   console.log("User already logged in , redirect to homepage")
    //   this.router.navigate(['homepage']);
    // }

    google.accounts.id.initialize({
      client_id: "579896482679-qk0bcdlphnckl27ale2mojvnsr920cal.apps.googleusercontent.com",
      callback: (response: any) => this.handleCredentialResponse(response)
    });

    google.accounts.id.renderButton(
      document.getElementById("google-login"),
      { theme: "outline", size: "large" }
    );


  }



  async login() {
    const loginUrl = usermoduleEnvironment.baseUrl + usermoduleEnvironment.login
    const payload = this.loginForm?.value
    console.log(payload)
    try {
      let res = await firstValueFrom(this.http.post(loginUrl, payload))
      console.log("Login response ", res);
    }
    catch (err) {
      console.error("Error during login ", err)
    }
  }

  reset() {

    this.loginForm.reset()
  }

  handleCredentialResponse(response: any) {
    const idToken = response.credential;
    console.log("Google response", response);
    console.log("ID TOKEN:", idToken);

    this.http.post("http://localhost:8080/auth/google", { idToken }).subscribe(res => {
      console.log("Backend Response:", res);

      if( res.statusCode == 200){
        this.tokenService.setToken(res.data.token);
        this.router.navigate(['homepage']);
      }
      else{
        console.error("Google login failed");
      }
    });
  }

}

interface LoginDto {
  email: string | null,
  password: string | null
}
