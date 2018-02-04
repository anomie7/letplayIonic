export class Content{
  private cdnUrl = '//d7brlaqn1qmn3.cloudfront.net/img/';
  itemId: number;
  itemTitle: string;
  itemCategoryText:string;
  itemMainImgRealName: string;
  itemPrice:number;
  itemDiscountPrice:number;
  itemDoStart:string;
  itemDoEnd:string;
  contentImgUrl: string;

  constructor(){ }

  getcontentImgUrl(): void {
    this.contentImgUrl = this.cdnUrl + this.itemMainImgRealName.substring(0, 6) + '/' + this.itemMainImgRealName;
  }
}
