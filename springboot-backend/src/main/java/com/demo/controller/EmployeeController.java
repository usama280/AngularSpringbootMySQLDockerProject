package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.repository.EmployeeRepository;
import com.demo.exception.ResourceNotFoundException;
import com.demo.model.Employee;

@RestController
@CrossOrigin("*") 
@RequestMapping("/api/v1/")
public class EmployeeController {
    
    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }
    
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee emp= employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with ID: "+id));
        return ResponseEntity.ok(emp);
    }

    
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails){
        Employee emp= employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with ID: "+id));

        emp.setFirstname(employeeDetails.getFirstname());
        emp.setLastname(employeeDetails.getLastname());
        emp.setEmailId(employeeDetails.getEmailId());
        
        Employee updatedEmployee=employeeRepository.save(emp);
        return ResponseEntity.ok(updatedEmployee);
    }


    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Long> deleteEmployee(@PathVariable Long id){
        employeeRepository.deleteById(id);
        return ResponseEntity.ok(id);
    }


}
