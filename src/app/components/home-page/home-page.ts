import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage implements OnInit 
{
  ngOnInit(): void {
   console.log("Home page initialized");
  }


}
