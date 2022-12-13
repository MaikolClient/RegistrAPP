import { Component } from '@angular/core';
import { NavController} from "@ionic/angular";

@Component({
  selector: 'app-tabs',
  templateUrl: 'generateqr.page.html',
  styleUrls: ['generateqr.page.scss']
})
export class GenerateqrPage {

  sigla: any;
  fecha: any;
  hora: any;
  sala: any;
  createCode: any;
  constructor(public navCtrl:NavController) {
  }

  public create() {
    this.createCode = (this.sigla + "|" + this.fecha + "|" + this.hora + "|" + this.sala);
  }
  ir() {

    this.navCtrl.navigateRoot('inicio');
  }
}