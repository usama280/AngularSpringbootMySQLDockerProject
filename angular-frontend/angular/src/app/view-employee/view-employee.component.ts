import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  id:number;
  emp:Employee;

  constructor(private route:ActivatedRoute, private router:Router, private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.emp=new Employee();

    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.emp=data;
    })
  }

}
