import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService, private route:ActivatedRoute, private router:Router) { }
  
  id:number;

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'] //grab param id value from route defined in app-routing.module.ts
    
    this.employeeService.deleteEmployeeById(this.id).subscribe(data=>{
      this.router.navigate(['employees'])
    })
  }

}
