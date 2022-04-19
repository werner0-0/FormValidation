import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Form-Validation';

  get firstname()
  {
    return this.register.get('firstname');
  }

  /*get gender()
  {
    return this.register.get('gender');
  }*/

  get country()
  {
    return this.register.get('country');
  }

  get city()
  {
    return this.register.get('city');
  }

  get age()
  {
    return this.register.get('age');
  }

  constructor(public fb: FormBuilder){}
  register = new FormGroup({});

  ngOnInit(): void {
    this.register = this.fb.group({
      firstname : ['',
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      //gender : ['',Validators.required],
      country : ['',Validators.required],
      city : ['',Validators.required],
      age : ['']
    });

    this.register.get('country')?.valueChanges
    .subscribe(enteredValue =>{
      const a = this.register.get('age');
      if(enteredValue==='US' || enteredValue==='Canada' || enteredValue==='India')
      {
        a?.setValidators(Validators.required);
      }
      else
      {
        a?.clearValidators;
      }
      a?.updateValueAndValidity();
    })
  }
}
