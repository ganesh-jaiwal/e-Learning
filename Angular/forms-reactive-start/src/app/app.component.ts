import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {promise} from 'selenium-webdriver';
import {reject} from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUserName = ['Ganesh', 'Shantanu'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    this.signupForm.valueChanges.subscribe(
      (value) => {
        console.log(value);
      }
    );
    this.signupForm.statusChanges.subscribe(
      (status) => {
        console.log(status);
      }
    );
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
    this.signupForm.patchValue({
      'gender': 'male'
    });
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUserName.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    }
    return null;
  }
  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'rahulshimpi88@gmail.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
