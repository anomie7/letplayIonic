import { Content } from './Content';

export class Recommend {

  recommendId: string;
  recommendTitle: string;
  contentList: Array<Content>;

  constructor(){
    this.contentList = new Array();
  }
}
