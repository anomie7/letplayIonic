import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExhibitionProvider } from '../../providers/exhibition/exhibition';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  user: string;

  constructor(public navCtrl: NavController, private exhibitionProvider:ExhibitionProvider) {
    console.log('hello AboutPage');
  }

  ionViewDidLoad(){
   this.exhibitionProvider.cast.subscribe(user => this.user = user);
  }

}
