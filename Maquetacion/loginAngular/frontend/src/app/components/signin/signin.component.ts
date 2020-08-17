import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user = {
    email: '',
    password: ''
  }
  public nombreWeb: string;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.nombreWeb = 'SignIn'

  }

  ngOnInit(): void {
  }
  signIn(){
    this.authService.signIn(this.user)
      .subscribe(res=>{
        localStorage.setItem('token',res['token']);
        this.router.navigate(['/private'])
      },error => {
        console.log(error);
      });
  }
}
