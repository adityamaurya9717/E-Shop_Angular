import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../service/http-service';

@Component({
  selector: 'app-user-register-component',
  standalone: false,
  templateUrl: './user-register-component.html',
  styleUrl: './user-register-component.scss',
})
export class UserRegisterComponent {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpService) {

    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      dob:['', Validators.required]
    })

  }

}
