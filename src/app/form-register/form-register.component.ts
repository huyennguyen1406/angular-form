import { Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent{
  title = 'reactive-form';
  countryList = [
    {id: 1, name: 'Viet Nam'},
    {id: 2, name: 'Canada'},
    {id: 3, name: 'USA'},
  ];
  contactForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    isMarried: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    address: new FormGroup({
      city: new FormControl('', [Validators.required]),
      street: new FormControl('',[Validators.required]),
      pincode: new FormControl('', [Validators.required])
    })
  });
  get firstname(){
    return this.contactForm.get('firstname');
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

}
