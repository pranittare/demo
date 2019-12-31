import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { Personal } from '../personal-detail/personal.model';
import { Loan } from '../loan-detail/loan.model';

@Injectable({
  providedIn: 'root'
})
export class TogetherService {

  constructor() { }
  // private messageSource = new BehaviorSubject<string>('Default Message')
  // currentMessage = this.messageSource.asObservable();
  user = new Subject<Personal[]> ();

  private personalDetails: Personal[] = [
    // new Personal(12/12/2012,'pranit_tare@hotmail.com','pranit','tare',45656565)
  ]
  //occupation
  bank = new Subject<string>()
  // currentBank = this.bank.asObservable()
  private occupation: any = []

  //Loan compomponent

  loanDetails = new Subject<Loan[]> ();
  private currentLoan:  Loan[] = [];
  private loan: any[] = []
  private emi: any[] = []
  // currentLoan:  Loan;

  // private loanSubject$ = new Subject<Loan> ();
  // loanDetails$ = this.loanSubject$.asObservable()

  // current = this.user.asObservable();
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

  // changeMessage(message: string) {
  //   this.messageSource.next(message);
  // }

  // addToPersonal(singleDetail: Personal ,personalDetails: Personal[]) {
    addToPersonal(personalDetails: Personal) {

    // this.user.push(value);
    this.personalDetails.push(personalDetails)
    // this.user.next(this.personalDetails.slice());
    // console.log('single ingredient')
    // this.personalDetails.push(...personalDetails)
    // console.log('multiple')
    this.user.next(this.personalDetails.slice());
    console.log(personalDetails)
    if (personalDetails) {
      localStorage.setItem('something', personalDetails.first)
      
      return true;
    }
    
    return false
  }
  get currentUser() {
    localStorage.getItem('something')
   return setTimeout(() =>{
    localStorage.removeItem('something')
   }, 15000)
  }
  getPersonal()  {
    // console.log(this.user)
    return this.personalDetails.slice()
    // return this.user.asObservable();
  }
  addToOccupation(occupation:string) {
    // this.user.push(bank);
    // this.occupation.push(occupation)
    console.log('occupation service');
    // this.bank.next(this.occupation.slice());
    this.occupation.push(occupation)
    this.bank.next(this.occupation.slice());

  }
  getOccupation() {
    console.log('getoccupation')
    return this.occupation

  }
  // addToLoan(loan: Loan) {
  addToLoan(loan, emi, ) {
    // this.user.push(loan, emi)

    this.currentLoan.push(loan, emi)
    this.loanDetails.next(this.currentLoan.slice())

    // this.currentLoan = loan;
    // this.loanSubject$.next(loan)
  }


  getLoan() {
    return this.currentLoan.slice();
  }




}
