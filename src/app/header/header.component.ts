import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
     register:FormGroup;
     lb:FormBuilder;

  constructor() { 
    this.lb=new FormBuilder();
    this.register=this.lb.group({
      name:["",[Validators.required,Validators.pattern("[a-zA-z0-9]")]],
      email:["",[Validators.required,Validators.pattern("[a-zA-Z0-9]@[a-z].[a-z]{3}")]],
      password:["",[Validators.required,Validators.pattern("[a-zA-Z]")]]
    })
     
    
  }

  ngOnInit(): void {
  }

}
