import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

import { ApiService } from 'src/app/services.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { threadId } from 'worker_threads';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @HostListener('window:popstate', ['$event'])
  onPopState(_event: any) {
    window.scrollTo(0,0)
  }
  keyPressNumbers(event: { which: any; keyCode: any; preventDefault: () => void; }) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
// variable declaration
banner_1 : any = ""
banner_2 : any = ""
banner_3 : any = ""
banner_4 : any = ""
homeCard1Img : any = ""
homeCard1IconImg : any = ""
HomeCard1Heading : any = ""
HomeCard1TextContent : any = ""
homeCard2Img : any = ""
homeCard2IconImg : any = ""
HomeCard2Heading : any = ""
HomeCard2TextContent : any = ""
homeCard3Img : any = ""
homeCard3IconImg : any = ""
HomeCard3Heading : any = ""
HomeCard3TextContent : any = ""
bigsizetext : any = ""
whoarewecontent : any = ""
videourl :any = ""
show2 : boolean = false;
show3 : boolean = false;
homename : any = ""
homemobile : any = ""
testimony: any =[];
successsubmit : boolean = false
loading : boolean = true;
Sanitizer : any
video_url: any;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 300,
    autoplay:true,
    slideBy:5 ,
    dotsEach:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 300,
    autoplay:true,
    slideBy:5 ,
    dotsEach:true,

    // navText: ["<div class='testomony-nav-button'><img class='left-button' src='assets/images/left-arrow.png'> </div>","<div class='testomony-nav-button'><img class='left-button' src='assets/images/right-arrow.png'> </div>"],
    navText:['<img src="../../../assets/images/left-arrow.png">','<img src="../../../assets/images/left-arrow.png">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    // nav: true
    nav:true
  }

  constructor(private apiService: ApiService,  public router: Router, public sanitizer:DomSanitizer ) {
    this.Sanitizer = sanitizer

  }


  ngOnInit(): void {
    setTimeout(()=>{
      this.loading = false;
 }, 1000);
 this.gethomebanner();
 this.gethomecontent();
 this.getActiveTestimony();
  }



  gethomebanner(){
    this.apiService.getData('getHomeBanner').subscribe(data => {
      const value= data.data;

      this.banner_1 = value[0].banner_1;
      this.banner_2 = value[0].banner_2;
      this.banner_3 = value[0].banner_3;
      this.banner_4 = value[0].banner_4

    })
  }

  getActiveTestimony(){
    this.apiService.getData('getActiveAllTestimony').subscribe(data => {
      this.testimony= data.data;

    })
  }


  gethomecontent(){
    this.apiService.getData('getHomeContent').subscribe(data => {
      const value= data.data;


      this.homeCard1Img = value[0].home_card_1_img;
      this.homeCard1IconImg = value[0].home_card_1_iconImg
      this.HomeCard1Heading = value[0].home_card1_heading
      this.HomeCard1TextContent = value[0].home_card_1_textcontent

      this.homeCard2Img = value[0].home_card_2_img;
      this.homeCard2IconImg = value[0].home_card2_iconImg
      this.HomeCard2Heading = value[0].home_card2_heading
      this.HomeCard2TextContent = value[0].home_card2_textcontent

      this.homeCard3Img = value[0].home_card3_img;
      this.homeCard3IconImg = value[0].home_card_3_iconImg
      this.HomeCard3Heading = value[0].home_card3_heading
      this.HomeCard3TextContent = value[0].home_card3_textcontent
      this.bigsizetext = value[0].home_bigsizetext
      this.whoarewecontent = value[0].home_whoarewe_text
      // const url = value[0].home_video_url
      // this.videourl=this.sanitizer.bypassSecurityTrustHtml(url)
      this.videourl = value[0].home_video_url


    })
  }
  homebookustest(){
    if(this.homename.length==0 || this.homemobile.length){
      this.openpopup3();
    }

  }
  homebookus(form:NgForm){
      const homebookus = {
        name : this.homename,
        mobile : this.homemobile,
      }
      this.apiService.postData(homebookus,'storehomebookus').subscribe((data)=>{
        if(data.error===false)

          this.loading = false;
          this.homename = '',
          this.homemobile = '';
          form.reset();
          this.successsubmit = true


        },_error =>{
          this.loading = false
        })
    }


    openpopup(){
      this.show2=true
    }
    closepopup2(){
      this.show2 = false;
    }
    closepopup3(){
      this.show3 = false;

    }
    openpopup3(){
      this.show3 = true;
    }

    requiredURL(str:string){
      const url = str.substring(17,str.length)
      return url;
    }




    }



