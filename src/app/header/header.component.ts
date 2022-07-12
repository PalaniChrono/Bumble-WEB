import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {
  loading : boolean = false;
  toggleMenu: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  pagetop(){
    window.scrollTo(0,0)
  }

  test(str:string){
    alert(str);
  }
  @HostListener('window:popstate', ['$event'])
  onPopState(_event: any) {
    window.scrollTo(0,0)
  }
  toggleNavBar(){
    this.toggleMenu =  !this.toggleMenu;
    alert(this.toggleMenu);

  }

}
