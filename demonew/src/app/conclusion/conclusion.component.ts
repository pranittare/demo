import { Component, OnInit, OnDestroy } from '@angular/core';
import { TogetherService } from '../service/Together.service';
import { Subscription } from 'rxjs';
import { Personal } from '../personal-detail/personal.model';
import { Loan } from '../loan-detail/loan.model';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.css']
})
export class ConclusionComponent implements OnInit, OnDestroy {

  constructor(private togetherService: TogetherService) { }
  personal: Personal[];
  occupation: [];
  loan: Loan[];
  subscription: Subscription;
  message: string
  ngOnInit() {

    this.personal = this.togetherService.getPersonal();

    this.occupation = this.togetherService.getOccupation()

    this.loan = this.togetherService.getLoan();

    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    
  }




