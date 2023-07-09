import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss']
})
export class EmpDetailsComponent {
  constructor(private activateRoute : ActivatedRoute , private user : UserService){}
  empId!: number;
empDetails!: any;

ngOnInit(): void {
  this.empId = Number(this.activateRoute.snapshot.paramMap.get('id'));
 // this.empId = Number(this.activateRoute.snapshot.params['id']);//Old approach
  this.empDetails = this.user.Employee.find(x => x.id === this.empId);
}

}