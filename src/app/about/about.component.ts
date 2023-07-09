import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(private route :Router,private activatedRoute  : ActivatedRoute){}
  backToBlog(){
    this.route.navigate(['blog'],{relativeTo : this.activatedRoute}); // we can use activateRoute to make relative path
    // this.route.navigate(['blog']); Always use absolute path
    //this.route.navigateByUrl('blog'); Always use absolute path
  }
}
