import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExhibitionProvider } from '../../providers/exhibition/exhibition';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user:string;

  constructor(public navCtrl: NavController, private exhibitionProvider: ExhibitionProvider) {

  }

  editUser(){
    this.exhibitionProvider.editUser(this.user);
  }

}
