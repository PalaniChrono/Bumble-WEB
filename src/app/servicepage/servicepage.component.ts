import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ApiService } from 'src/app/services.service';
import { Router } from "@angular/router";
import { HostListener } from '@angular/core';
// import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.component.html',
  styleUrls: ['./servicepage.component.css']
})
export class ServicepageComponent implements OnInit {
  @HostListener('window:popstate', ['$event'])
  onPopState(_event: any) {
    window.scrollTo(0,0)
  }

  loading : boolean = false;
  services1_img : any = ""
  services2_img : any = ""
  services3_img : any = ""
  services4_img : any = ""
  services5_img : any = ""
  services6_img : any = ""
  services7_img : any = ""
  services8_img : any = ""
  services9_img : any = ""
  services10_img : any = ""
  services1_text : any = ""
  services2_text : any = ""
  services3_text : any = ""
  services4_text : any = ""
  services5_text : any = ""
  services6_text : any = ""
  services7_text : any = ""
  services8_text : any = ""
  services9_text : any = ""
  services10_text : any = ""

  constructor(private apiService: ApiService,  public router: Router,  ) {


  }

  ngOnInit(): void {
    this.getservicescontent();
  }

  getservicescontent(){
    this.apiService.getData('getServicescontent').subscribe(data => {
      const value= data.data;

      this.services1_img = value[0].services1_img
      this.services2_img = value[0].services2_img
      this.services3_img = value[0].services3_img
      this.services4_img = value[0].services4_img
      this.services5_img = value[0].services5_img
      this.services6_img = value[0].services6_img
      this.services7_img = value[0].services7_img
      this.services8_img = value[0].services8_img
      this.services9_img = value[0].services9_img
      this.services10_img = value[0].services10_img
      this.services1_text = value[0].services1_text
      this.services2_text = value[0].services2_text
      this.services3_text = value[0].services3_text
      this.services4_text = value[0].services4_text
      this.services5_text = value[0].services5_text
      this.services6_text = value[0].services6_text
      this.services7_text = value[0].services7_text
      this.services8_text = value[0].services8_text
      this.services9_text = value[0].services9_text
      this.services10_text = value[0].services10_text



  })
}

}
