import { Recommend } from './../../providers/Recommend';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExhibitionProvider } from '../../providers/exhibition/exhibition';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  recommendList:Array<Recommend>;

  constructor(public navCtrl: NavController, private exhibitionProvider: ExhibitionProvider) {
    console.log('hello AboutPage');
  }

  ionViewDidLoad(){
    this.exhibitionProvider.cast.subscribe(
      recommendList => this.recommendList = recommendList
    );
    console.log(this.recommendList);
   }

   showContent(contentList:any){
     console.log(contentList);
     this.navCtrl.push('ContentPage', {contentList: contentList});
   }
}
