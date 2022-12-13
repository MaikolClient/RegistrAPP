import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresadoGuard implements CanActivate {

  constructor (public navCtrl : NavController){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('Ingresado')){
        return true;
      } else{
        if(confirm("Debes iniciar sesión para ingresar" )) {
          localStorage.removeItem('Ingresado');
          this.navCtrl.navigateRoot('login');
          return false;
          
        } else{
          localStorage.removeItem('Ingresado');
          this.navCtrl.navigateRoot('login');
          return false;
        }
        
      }

      
  }
  
}