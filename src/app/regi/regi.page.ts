import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-regi',
  templateUrl: './regi.page.html',
  styleUrls: ['./regi.page.scss'],
})
export class RegiPage implements OnInit {
  slide = '8vh';
  trans = '1s';
  visible = false;
  regiF:FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.regiForm()
  }
  regiForm(){
    this.regiF = this.fb.group({
      'name': [''],
      'mobile':[''],
      'email':[''],
      'pass':[''],
      'rePass':[''],
      'sponsorNo':[''],
      'S_name':['']
    })
  }
  slideUp(){
    this.slide = '90vh'
    this.visible = true
  }
}
