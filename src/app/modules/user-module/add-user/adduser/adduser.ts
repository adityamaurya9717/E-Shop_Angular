import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-adduser',
  standalone: false,
  templateUrl: './adduser.html',
  styleUrl: './adduser.scss',
})
export class Adduser {

  userForm:FormGroup;

  constructor(private fb:FormBuilder, private router : Router ){
     this.userForm = this.fb.group(
      {
       firstName:[''],
       lastName:[''],
       email:[''],
       password:[''],
     })

  }

  submit(){
    console.log(this.userForm.value)
  }

  login(){
    this.router.navigateByUrl("/login")
    
  }









}
