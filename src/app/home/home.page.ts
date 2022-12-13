import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  user = JSON.parse(localStorage.getItem('user') || '{}');

  constructor(public navCtrol : NavController) {

    }
  

  ngOnInit() {
  }
  volver(){

    this.navCtrol.navigateRoot('inicio');}
}