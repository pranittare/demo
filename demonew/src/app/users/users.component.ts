import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
userId: string
  constructor(private afAuth: AngularFireAuth ) { }

  ngOnInit() {
    
  }
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.afAuth.auth.onAuthStateChanged((user) =>{
      if (user) {
        console.log(user.uid);
       
      }
    })

  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
