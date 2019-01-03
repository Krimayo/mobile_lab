import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vr',
  templateUrl: 'vr.html',
})
export class VrPage {

  data: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get('vr');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VrPage');
  }

}
