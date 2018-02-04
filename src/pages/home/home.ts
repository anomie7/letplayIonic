import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
    console.log('hi i am home')
  }

  ionViewDidLoad(){
   console.log('hi homePage did Load!');
  }

}
