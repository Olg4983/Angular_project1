import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public name:string='';
  public password:string='';
  public keyObj={
    name:'test',
    password:'test',
  }
  constructor(private router:Router, private notifierService:NotifierService) { }

  ngOnInit(): void {
  }
  public login():void{
    if(this.keyObj.name===this.name && this.keyObj.password===this.password){
      localStorage.setItem('token','test_token');
      this.router.navigate(['dashboard']);
    }else {
      this.notifierService.notify('error', 'Неправильные данные для ввода!');

    }
  }
}
