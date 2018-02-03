import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExhibitionProvider } from '../../providers/exhibition/exhibition';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {
    console.log('hello AboutPage');
  }

  ionViewDidLoad(){ }
}
