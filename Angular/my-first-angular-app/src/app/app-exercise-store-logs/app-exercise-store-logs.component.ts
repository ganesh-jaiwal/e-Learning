import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-store-logs',
  templateUrl: './app-exercise-store-logs.component.html',
  styleUrls: ['./app-exercise-store-logs.component.css']
})
export class AppExerciseStoreLogsComponent implements OnInit {
  showDetails = 'Show Details';
  logsArray = [];
  constructor() { }
  onShowClick() {
  	var currentDate = new Date();
  	this.showDetails = this.showDetails === 'Show Details' ? 'Hide Details' : 'Show Details';
  	this.logsArray.push("Button click loged on " + currentDate);
  }
  ngOnInit() {
  }

}
