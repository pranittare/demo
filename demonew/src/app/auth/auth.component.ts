import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from './user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  res: any;

  constructor(private authService: AuthService ) { }

  ngOnInit() {
  }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  userModel = new User('', ''); 
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password
    console.log(form.value)
    if(this.isLoginMode) {
//..
    } else {
      this.authService.singup(email, password).subscribe(
        resData =>{
        console.log(resData);
      },
        error =>{
          console.log(error);
        }
      );
    }
    // let auth = this.afauth.auth.signInWithEmailAndPassword(email,password);
  
    // console.log(auth)
    form.reset();
    
    }
    // uid = this.afauth.authState.pipe(
    //   map(authState => {if(!authState) {
    //     return null;
    //   } else { 
    //      return authState.uid
    //     }
    //     }));
    // console.log(this.auth);
  }

