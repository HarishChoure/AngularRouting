import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';

const routes: Routes = [
  {path:'' ,redirectTo : 'Home',pathMatch:'full'},
  {path:'Home', component:HomeComponent},
  {path:'blog', component:BlogComponent},
  {path:'blog/blogDetails/:id', component:EmpDetailsComponent},//We can increase parmeter by path:'blog/blogDetails/:id/:name/:type'
  {path:'about', component:AboutComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
