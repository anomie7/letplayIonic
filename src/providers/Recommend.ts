import { Content } from './Content';

export class Recommend {
  private cdnUrl = '//d7brlaqn1qmn3.cloudfront.net/img/';
  recommendImgUrl: string;
  recommendId: string;
  recommendTitle: string;
  recommendImgRealname: string;
  contentList: Array<Content>;

  constructor(){
    this.contentList = new Array();
  }

  getrecommendImgUrl(): string {
    this.recommendImgUrl = this.cdnUrl + this.recommendImgRealname.substring(0, 6) + '/' + this.recommendImgRealname;
    return this.recommendImgUrl;
  }

}
