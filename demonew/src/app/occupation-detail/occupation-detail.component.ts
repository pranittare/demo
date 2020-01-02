import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TogetherService } from '../service/Together.service';


@Component({
  selector: 'app-occupation-detail',
  templateUrl: './occupation-detail.component.html',
  styleUrls: ['./occupation-detail.component.css']
})
export class OccupationDetailComponent implements OnInit {
 
  list:FormGroup;
  bank: string;
  // search = this.list.value
  isvisible = false;

  constructor(private router: Router, private togetherService: TogetherService) {
    
   }

  ngOnInit() {

    this.initForm();

  }
 
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

  viewAllBanks() {
    this.isvisible = !this.isvisible

}
  onSubmit(){
     this.togetherService.addToOccupation(this.list.value.search)
  
    this.router.navigate(['/loan'])
  }
  showDropDown = false;
  toggleDropDown() {
    this.showDropDown = !this.showDropDown
  }

  private initForm () {
  
    this.list = new FormGroup({
      // search: new FormControl('',(Validators.required, Validators.minLength(1)) )
      search: new FormControl('',(Validators.required) )

    })
  }
  get searchValue() {
    return this.list.get('search')
  }

  getSearchValue() {
    return this.list.value.search;
  }
  selectValue(value) {

    this.list.setValue({search: value})
    this.showDropDown = false
  }
}


