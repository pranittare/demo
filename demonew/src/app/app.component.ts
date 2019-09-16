import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsername: ['chris', 'anna'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null,[Validators.required, this.forbiddenNames.bind(this)]),
        // 'username': new FormControl(null,[forbiddenNames]),

        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }
  onSubmit(){
    console.log(this.signupForm);
  }
  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  // forbiddenNames(control: FormControl): {[s:string]: boolean}{
  //   if (this.forbiddenUsername.indexOf(control.value) !==-1) {
  //     return {'nameIsForbidden':  true};
  //   }
  //   return null;
  // }
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsername) {
    if (this.forbiddenUsername.indexOf(control.value) !== -1) {
    return { 'nameIsForbidden': true };
    }
    }
    return null;
    }

    // forbiddenNames(control: FormControl): {[s: string]: boolean} {
    //   if (this.forbiddenUsername.indexOf(control.value) !== -1) {
    //     return {'nameIsForbidden': true};
    //   }
    //   return null;
    // }

  // function forbiddenNames (forbiddenUsername: string): ValidatorFn { 
  //   return(control:AbstractControl): {[s: string]: boolean} | null => {

  //   if(control.value !== -1){
  //     return {'nameIsForbidden': true};
  //   }
  //   return null;
  // };

}



