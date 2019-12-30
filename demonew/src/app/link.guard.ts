import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { TogetherService } from './service/Together.service';

@Injectable({
  providedIn: 'root'
})
export class LinkGuard implements CanActivate {
  constructor(private togetherService: TogetherService, private router: Router) {}
  canActivate(): boolean 
    {
      if (+this.togetherService.currentUser > 60) {
        console.log(this.togetherService.currentUser)
        return true;
        
      } else {
        this.router.navigate(['/personal'])
        return false;
      }
  }
  
}
