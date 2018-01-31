export class MyClass {
  public name: string = 'MyClass instance';
  public dt: Date = new Date();
  public time: Number;
  public num: Number;

  constructor(){
    console.log('hi guys! i am MyClass');
    this.time = this.dt.getTime();
    this.num = Math.floor(Math.random() * 1000);
  }
}
