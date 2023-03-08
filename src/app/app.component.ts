import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  companyName = "ABC Company";

  employee={
    "id":1,
    "name":"john",
    "age":30,
    "salary":1000
  };

  firstName = "John";
  lastName = "Smith";


  firstNum:number = 10;
  secondNum:number = 20;
  sum = 0;
  addNumbers(){
    console.log(this.firstNum);
    console.log(this.secondNum);
    this.sum = parseInt(this.firstNum.toString()) + this.secondNum;
  };

  isRedColor:any=false;

  show = true;
  toggleForm(){
    this.show = !this.show;
  };

  employees=[
    {"id":1, "name":"john", "age":30, "salary":1000},
    {"id":2, "name":"smith", "age":30, "salary":1000},
    {"id":3, "name":"rynn", "age":30, "salary":1000},
    {"id":4, "name":"george", "age":30, "salary":1000}
  ]
}
