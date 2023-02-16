import { Component,OnInit } from '@angular/core';
import { CompanyService } from './services/company.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'appi2';
  info: any [] = [];

 
constructor(private http:HttpClient) {
  console.log ('El componente se ha inicializado');
}

ngOnInit(): void{
  console.log('El componente se ha inicializado');

  this.http.get ('https://api.spacexdata.com/v4/capsules').subscribe((info:any) => {
    this.info = info;
  })
 }
}

