import { Content } from './../../providers/Content';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {
  contentList:Array<Content>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contentList = navParams.get('contentList');
    this.contentList.forEach( item => {
      console.log(item);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentPage');
  }

}
