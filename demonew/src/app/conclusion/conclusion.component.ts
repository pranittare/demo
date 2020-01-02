import { Component, OnInit, OnDestroy } from '@angular/core';
import { TogetherService } from '../service/Together.service';
import { Subscription } from 'rxjs';
import { Personal } from '../personal-detail/personal.model';
import { Loan } from '../loan-detail/loan.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.css']
})
export class ConclusionComponent implements OnInit {

  constructor(private togetherService: TogetherService, private router: Router) { }
  personal: Personal[];
  occupation: [];
  loan: Loan[];

  message: string
  ngOnInit() {

    this.personal = this.togetherService.getPersonal();

    this.occupation = this.togetherService.getOccupation()

    this.loan = this.togetherService.getLoan();

    }

    onSubmit(){
      this.router.navigate(['/personal'])
      localStorage.removeItem('something')
    }
  }




