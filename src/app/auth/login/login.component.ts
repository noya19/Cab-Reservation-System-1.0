import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

    constructor(public authservice: AuthService){}
    onLogin(form: NgForm)
    {
        if(form.invalid)
        {
           return;
        }
        this.authservice.login(form.value.email, form.value.password);
        form.resetForm();
    }
}
