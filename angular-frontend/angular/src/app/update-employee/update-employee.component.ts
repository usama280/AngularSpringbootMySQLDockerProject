import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  id: number;
  
  constructor(private employeeService:EmployeeService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'] //grab param id value from route defined in app-routing.module.ts
    
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    })
  }

  onSubmit(){
    this.employeeService.updateEmployeeById(this.id, this.employee).subscribe(data=>{
      this.router.navigate(['employees'])
    })
  }

}
