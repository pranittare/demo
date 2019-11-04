import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}


export class AuthService {
 user = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient) { }

  singup(email: String, password: String) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAc8_0fGvJmhtZWQ2_EVdnJ_DzPNMD79xA',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
    // .pipe(catchError(this.handelError),
    // tap(resData => {
    //   this.hande
    // }))
  }
}
