import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';


const routes: Routes = [
  {path:"employees", component: EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path:"", redirectTo:"employees", pathMatch:"full"},
  {path:"update-employee/:id", component: UpdateEmployeeComponent},
  {path:"delete-employee/:id", component: DeleteEmployeeComponent},
  {path:"view-employee/:id", component: ViewEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
