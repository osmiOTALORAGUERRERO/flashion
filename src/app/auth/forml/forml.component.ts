import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ErrorStateMatcher} from "@angular/material";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
export class FormErrorStateMatcher implements ErrorStateMatcher{
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-auth-form',
  templateUrl: './forml.component.html',
  styleUrls: ['./forml.component.css']
})
export class FormlComponent implements OnInit {
  @Output() onsubmit = new EventEmitter<any>();
  @Input() btnText: string;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
    passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  matcher = new FormErrorStateMatcher();
  constructor() { }

  ngOnInit() {
  }

  submit(email, password) {
    this.onsubmit.emit({email, password});
  }

}
