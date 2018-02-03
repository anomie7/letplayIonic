import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
// import { MyClass } from '../MyClass';
/*
  Generated class for the ExhibitionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExhibitionProvider{
  private user = new BehaviorSubject<string>('minu');
  cast = this.user.asObservable();

  constructor(public http: HttpClient) {
   this.recommendApi().subscribe(
     data => {console.log('response sucessful')},
     err => {console.error(err)},
     () => {'method is done!'}
   )
  }

  recommendApi(){
    return this.http.get('/api/recommend');
  }

}
