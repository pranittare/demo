import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from './loan.model';
import { TogetherService } from '../service/Together.service';

@Component({
  selector: 'app-loan-detail',
  templateUrl: './loan-detail.component.html',
  styleUrls: ['./loan-detail.component.css']
})
export class LoanDetailComponent implements OnInit {

  constructor(private router: Router, private togetherService: TogetherService) { }

  loanvalue:any = '0';
  emivalue:any = '0';

 buttonenable = true;

  // subjectreview:boolean = true;

  ngOnInit() {

  }

  toalLoan(value1: number) {
    if (value1 >= 1000) {
      this.buttonenable = false;
      return Math.round(value1 / 1000) + 'L';
    }
    return this.loanvalue;
  }
  totalEmi(value2: number) {
    if (value2 >= 1000) {
      this.buttonenable = false;
      return Math.round(value2 / 1000) + 'k';
    }

    return value2;
  }

  emi(event){
    this.emivalue = event.value + ' K'
    if (event.value > 0) {
      this.buttonenable = false
  
    }

  }
  loan(event) {
    this.loanvalue = event.value +' L'
    if (event.value > 0) {
      this.buttonenable = false
  }
  }
  onSubmit(){
    this.togetherService.addToLoan(this.loanvalue, this.emivalue)
     this.router.navigate(['/conclusion'])
  }

 
}

