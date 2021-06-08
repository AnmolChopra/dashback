import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
slide = '8vh';
trans = '1s';
visible = false;
mobF:FormGroup
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginF()
  }
  loginF(){
    this.mobF = this.fb.group({
      'mobile':[''],
      'pass':['']
    })
  }
  slideUp(){
    this.slide = '90vh'
    this.visible = true
  }
  regi(){
    this.router.navigate(['regi'])
  }
}
