import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }
  ShowEmployeedata : Employee={
    lang: '',
    qual: '',
    exp: null
  }
  Employeedata : Employee={...this.ShowEmployeedata}
  ngOnInit(): void {
  }
  onSubmit(form : NgForm){
    console.log('Employee Data:',form.value);
    form.reset();
  }
}
