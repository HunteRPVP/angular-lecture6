import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  condition: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.condition = !this.condition;
  }

}
