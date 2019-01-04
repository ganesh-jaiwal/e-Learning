import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') registerForm: NgForm;
  defaultSubscription = 'advanced';
  usersValues = '';
  submitted = false;
  onFormSubmit() {
    this.submitted = true;
    this.usersValues = JSON.stringify(this.registerForm.value,null,2);
    console.log('Form Values: ', this.usersValues);
  }
}
