import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  Employee = [
    {id:1, name:'Krishna'},
    {id:2, name:'Ram'},
    {id:3, name:'Radha'},
    {id:4, name:'Ramesh'},
    {id:5, name:'Kanti'},
    {id:6, name:'Harish'}
  ];

  getData(){
    return this.Employee;
  }
}
