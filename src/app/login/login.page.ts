import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
              public alertController: AlertController,
              public navCtrol : NavController
  ) {

    this.formularioLogin = this.fb.group({
      'usuario': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }

  async ingresar() {

    var f = this.formularioLogin.value;

    var user = JSON.parse(localStorage.getItem("user") || '{}');

    if (user.usuario == f.usuario && user.password == f.password) {
      console.log('Ingresado');
      localStorage.setItem('Ingresado','true');
      this.navCtrol.navigateRoot('inicio');
    }
    else {
      const alert = await this.alertController.create({
        header: 'Datos invalidos',
        message: 'Datos ingresados no son correctos.',
        buttons: ['Aceptar'],
      });

      await alert.present();
      return;
    }
  }

}