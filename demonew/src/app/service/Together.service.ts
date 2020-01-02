import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { Personal } from '../personal-detail/personal.model';
import { Loan } from '../loan-detail/loan.model';

@Injectable({
  providedIn: 'root'
})
export class TogetherService {

  constructor() { }
  user = new Subject<Personal[]> ();

  private personalDetails: Personal[] = [

  ]
  //occupation
  bank = new Subject<string>()
  // currentBank = this.bank.asObservable()
  private occupation: any = []

  //Loan compomponent

  loanDetails = new Subject<Loan[]> ();
  private currentLoan:  Loan[] = [];


  address= ["rd street", "icici bank", "hdfc bank", "aol bank", "london",
  "Allahabad Bank",
  "Andhra Bank",
  "Axis Bank",
  "Bank of Bahrain and Kuwait",
  "Bank of Baroda - Corporate Banking",
  "Bank of Baroda - Retail Banking",
  "Bank of India",
  "Bank of Maharashtra",
  "Canara Bank",
  "Central Bank of India",
  "City Union Bank",
  "Corporation Bank",
  "Deutsche Bank",
  "Development Credit Bank",
  "Dhanlaxmi Bank"

]

  addToPersonal(personalDetails: Personal) {

    this.personalDetails.push(personalDetails)
    this.user.next(this.personalDetails.slice());
    if (personalDetails) {
      localStorage.setItem('something', personalDetails.first)
      
      return true;
    }
    
    return false
  }
  getcurrentUser() {
   localStorage.getItem('something')
  }

  getPersonal()  {
    return this.personalDetails.slice()

  }
  addToOccupation(occupation:string) {
     this.occupation.push(occupation)
    this.bank.next(this.occupation.slice());

  }
  getOccupation() {
    return this.occupation

  }

  addToLoan(loan, emi, ) {
    this.currentLoan.push(loan, emi)
    this.loanDetails.next(this.currentLoan.slice())

  }


  getLoan() {
    return this.currentLoan.slice();
  }
}
