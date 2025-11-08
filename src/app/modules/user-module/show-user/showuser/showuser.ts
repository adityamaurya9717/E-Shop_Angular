import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment'


@Component({
  selector: 'app-showuser',
  standalone: false,
  templateUrl: './showuser.html',
  styleUrl: './showuser.scss',
})
export class Showuser implements OnInit {
  ngOnInit(): void {
   console.log("environemnt"+environment)
  }

  

}
