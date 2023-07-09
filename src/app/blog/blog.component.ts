import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  empId!:any;
  empDetails !:any;
  Employee :any=[];
  constructor(private activatedRoute : ActivatedRoute,private user :UserService){

  }
  ngOnInit() : void{
    this.Employee = this.user.getData();

  }
  
  
}
