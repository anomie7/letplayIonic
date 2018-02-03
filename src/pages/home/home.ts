import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExhibitionProvider } from '../../providers/exhibition/exhibition';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user:string;
  bimo:string = 'assets/imgs/bimo.jpg';
  constructor(public navCtrl: NavController, private exhibitionProvider: ExhibitionProvider) {
    console.log('hi i am home')
  }

}
