import { Component, OnInit } from '@angular/core';

import { AlertController, NavController } from '@ionic/angular';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})

export class RegistrarPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
              public alertController : AlertController,
              public navCtrol : NavController) {

    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'usuario': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }

  async guardar() {

    var f = this.formularioRegistro.value;

    if (this.formularioRegistro.invalid) {

      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Debes llenar todos los campos.',
        buttons: ['Aceptar'],
      });

      await alert.present();
      return;
    }

    var user = {
      nombre: f.nombre,
      usuario: f.usuario,
      password: f.password
    }

    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('Ingresado','true');
    this.navCtrol.navigateRoot('inicio');
  }


}