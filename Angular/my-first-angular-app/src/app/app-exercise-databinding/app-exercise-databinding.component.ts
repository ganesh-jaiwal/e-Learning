import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-databinding',
  templateUrl: './app-exercise-databinding.component.html',
  styleUrls: ['./app-exercise-databinding.component.css']
})
export class AppExerciseDatabindingComponent implements OnInit {
  userName = "Ganesh";
  constructor() { }
  clearUserName() {
  	this.userName = "";
  }
  ngOnInit() {
  }
}
