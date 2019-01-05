import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectCreate: FormGroup;
  projectSubmitted = false;
  formValues: string;
  ngOnInit() {
    this.projectCreate = new FormGroup({
      'projectname': new FormControl(null, [Validators.required/*, this.rejectedNames*/], this.rejectedNamesAsync),
      'email': new FormControl(null, [Validators.required]),
      'projectstatus': new FormControl('stable')
    });
  }
  onFormSubmit() {
    this.projectSubmitted = true;
    this.formValues = JSON.stringify(this.projectCreate.value, null, 2);
  }
  // rejectedNames(control: FormControl): { [s: string]: boolean } {
  //   if (control.value === 'Test') {
  //     return { 'rejectedName': true };
  //   }
  //   return null;
  // }
  rejectedNamesAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ 'rejectedName': true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
    return promise;
  }
}
