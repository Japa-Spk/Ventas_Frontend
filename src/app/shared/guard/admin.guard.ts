import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(public router: Router) { }
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    // Guard for user is login or not
    console.log("Guard admin")
    let user: any = JSON.parse(localStorage.getItem('user') || 'null');
    console.log("Valor user", user);
    if (!user) {
      this.router.navigate(['/login']);
      return true
    }
    return true
  }
}
