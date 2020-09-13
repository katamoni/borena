import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
        register1:FormGroup;
        mybuilder:FormBuilder;
      public  msg:string;
  constructor(private _router:Router) { 
    this.mybuilder=new FormBuilder;
    this.register1=this.mybuilder.group({
      name:["",[Validators.required,Validators.pattern("[a-zA-Z0-9]{6,15}")]],
      emailid:["",[Validators.required,Validators.pattern("^[a-zA-Z0-9]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$")]],
      password:["",[Validators.required,Validators.pattern("^([a-zA-Z0-9@*#]{8,15})$")]],
      mobile:["",[Validators.required,Validators.pattern("^([9]{1})([234789]{1})([0-9]{8})$")]]
    })
  }
  submitted(){
    if(this.register1.valid){
    window.confirm('Your Registration is completed. Please Login')
    this._router.navigate(['/login']);
  }
}
  ngOnInit(): void {
  }

}
