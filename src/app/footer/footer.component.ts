import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  loading : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  pagetop(){
    window.scrollTo(0,0)
  }

}
