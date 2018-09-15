import { Component, OnInit } from '@angular/core';
import { AppDataService } from "../services/app-data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  appName:string;

  constructor(private appData:AppDataService) { }

  ngOnInit() {
    this.appName = this.appData.appName;
  }

  loginBtn() {
  }
}
