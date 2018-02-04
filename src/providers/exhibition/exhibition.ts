import { Recommend } from '../Recommend';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Content } from '../Content';
/*
  Generated class for the ExhibitionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExhibitionProvider{
  private recommendList:Array<Recommend> = new Array();
  private recommendListBehaviorSubject = new BehaviorSubject(this.recommendList);
  cast = this.recommendListBehaviorSubject.asObservable();

  constructor(public http: HttpClient) {
   this.recommendApi().subscribe(
     data => {
      this.getRecommendList(data);
      this.recommendListBehaviorSubject.next(this.recommendList);
     },
     err => {console.error(err)},
     () => {'method is done!'}
   )
  }

  getRecommendList(data:any){
    for(var i = 0; i < data.data.list.length; i++){
      let datalist = data.data.list[i];
      this.recommendList[i] = new Recommend();
      this.recommendList[i].recommendId = datalist.recommand_id;
      this.recommendList[i].recommendTitle = datalist.recommand_title;
      this.getRecommendImgRealName(this.recommendList[i].recommendId, i);

      for(var j = 0; j < datalist.CONTENT_LIST.length; j++){
        let contentList = datalist.CONTENT_LIST[j];
        this.recommendList[i].contentList[j] = new Content();
        this.recommendList[i].contentList[j].itemId = contentList.ITEM_ID;
        this.recommendList[i].contentList[j].itemTitle = contentList.ITEM_TITLE;
        this.recommendList[i].contentList[j].itemCategoryText = contentList.ITEM_CATEGORY_TEXT;
        this.recommendList[i].contentList[j].itemPrice = contentList.PRICE;
        this.recommendList[i].contentList[j].itemDiscountPrice = contentList.DISCOUNT_PRICE;
        this.recommendList[i].contentList[j].itemMainImgRealName = contentList.ITEM_MAINIMG_REALNAME;
        this.recommendList[i].contentList[j].itemDoStart = contentList.ITEM_DO_START;
        this.recommendList[i].contentList[j].itemDoEnd = contentList.ITEM_DO_END;
        this.recommendList[i].contentList[j].getcontentImgUrl();
      }
    }
    console.log(this.recommendList);
  }

  getRecommendImgRealName(id:string, i:number){
    this.recommendImgRealNameApi(id).subscribe(
      data => {
        this.getRecommendRealName(data, i);
        // console.log(this.recommendList[i].getrecommendImgUrl());
      },
      err => {console.error(err)},
      () => {'recommendImgRealNameApi done!'}
    )
  }

  getRecommendRealName(data:any, i:number) {
    this.recommendList[i].recommendImgRealname = data.data.REALNAME;
  }

  recommendImgRealNameApi(id:string,){
    return this.http.get(`/api/exhibition/${id}`)
  }

  recommendApi(){
    return this.http.get('/api/recommend');
  }

}
