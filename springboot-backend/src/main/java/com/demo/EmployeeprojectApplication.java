package com.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties
@EntityScan(basePackages = {"com.demo.model"}) 
public class EmployeeprojectApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeprojectApplication.class, args);
	}

}
