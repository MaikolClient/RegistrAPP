import { Component, OnInit } from '@angular/core';

import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  user = JSON.parse(localStorage.getItem('user') || '{}')
  constructor(public navCtrol: NavController) {
  }

  ngOnInit() {
    console.log('nombre')
    console.log('usuario')
  }
  perfil() {

    this.navCtrol.navigateRoot('home');
  }
  generador() {

    this.navCtrol.navigateRoot('generador');
  }
  escaner() {

    this.navCtrol.navigateRoot('escanear');
  }

  compas(){

    this.navCtrol.navigateRoot('compas');

  }

  inicio(){
    this.navCtrol.navigateRoot('inicio');}


  logout(){
    if(confirm("¿Estás seguro de querer cerrar sesión?" )) {
    localStorage.removeItem('Ingresado')
    this.navCtrol.navigateRoot('login')
  }
}
}