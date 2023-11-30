// import { Component } from '@angular/core';

import { Component, OnInit } from '@angular/core';

// @Component({
//   selector:'app-counter',
//   template:'<h1>Hola Counter</h1>'
// })
// export class CounterComponent{

// }



@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}} </h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>

  `
})

export class CounterComponent  {
 public counter:number=0;

 increaseBy(value:number){
  this.counter=this.counter+value;
 }

 resetCounter(){
  this.counter=10;

 }


}
