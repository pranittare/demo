import { Component, OnInit } from '@angular/core';
import {MatFormFieldControl} from '@angular/material/form-field';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OccupationDetailComponent } from '../occupation-detail/occupation-detail.component';
import { TogetherService } from '../service/Together.service';
import { Personal } from './personal.model';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  // message:string;
  personalDetails: Personal[] 
  constructor(private router: Router, private togetherService: TogetherService) { }

  ngOnInit() {
    // this.togetherService.currentMessage.subscribe(message =>{
    //   this.message = message
    // })
  }
  
  onSubmit(form: NgForm){
    const value = form.value;
    // this.togetherService.user.next(value)
    const newPersonal = new Personal(value.date, value.email, value.first, value.last, value.mobile)
    console.log('personal data collected')
    // this.togetherService.addToPersonal(newPersonal,value);
    this.togetherService.addToPersonal(newPersonal);

    console.log(value);

    this.router.navigate(['/occupation'])
    
    form.reset()
  }



}
