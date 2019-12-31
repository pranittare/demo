import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { OccupationDetailComponent } from './occupation-detail/occupation-detail.component';
import { LoanDetailComponent } from './loan-detail/loan-detail.component';
import { ConclusionComponent } from './conclusion/conclusion.component';

import { LinkGuard } from './link.guard';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/personal',
    pathMatch: 'full'
  },
  {
    path: 'personal',
    component: PersonalDetailComponent
  },
  {
    path: 'occupation',
    component: OccupationDetailComponent
  },
  {
    path: 'loan',
    component: LoanDetailComponent

  },
  {
    path: 'conclusion',
    component: ConclusionComponent,
    canActivate: [LinkGuard]

  },
  {
    path: '**',
    component: PersonalDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
