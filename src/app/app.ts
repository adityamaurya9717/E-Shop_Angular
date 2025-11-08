import { Component, OnInit, signal } from '@angular/core';

import {environment} from './environments/environment'
import {TestService} from './service/TestHttpService'

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {

  constructor( private testService:TestService){

  }
  ngOnInit(): void {
    console.log("environemnt="+environment.apiUrl)
     let result = this.testService.test();
     console.log("Result :" + result)
  }
  protected readonly title = signal('test-angular-app');

  pathsList = [
    {path:"users"},
    {path:"setting"},
    {path:"about"}
  ]
}
