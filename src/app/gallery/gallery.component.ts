import { style } from '@angular/animations';
import { Component,AfterViewInit, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ApiService } from 'src/app/services.service';
import { ActivatedRoute, Router } from "@angular/router";
import { HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { first } from 'rxjs/operators';
// import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  menuIndex: any;
  @HostListener('window:popstate', ['$event'])
  onPopState(_event: any) {
    window.scrollTo(0,0)
  }

  loading : boolean = true;
  isActive : boolean = true;
  previewImageSrc:String = "";


  all = [
    {text: 'one ', cols: 1, rows: 2, color: 'lightblue', imageUrl:'{wed_portrait}'},
    {text: 'two', cols: 1, rows: 1, color: 'lightgreen' , imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'three', cols: 1, rows: 1, color: 'lightpink', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'four', cols: 2, rows: 1, color: '#DDBDF1', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},

    {text: 'five', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'six', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'seven', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'eight', cols: 2, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'nine', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'ten', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'eleven', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'twelve', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
  ];

  wedding = [
    {text: 'one ', cols: 1, rows: 2, color: 'lightblue', imageUrl:''},
    {text: 'two', cols: 1, rows: 1, color: 'lightgreen' , imageUrl:""},
    {text: 'three', cols: 1, rows: 1, color: 'lightpink', imageUrl:""},
    {text: 'four', cols: 2, rows: 1, color: '#DDBDF1', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_373.33,w_560.53/v1645794902/BlaackForrest/home/section_three_main_image.png"},

    {text: 'five', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'six', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'seven', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'eight', cols: 2, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'nine', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'ten', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'eleven', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'twelve', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'thirteen', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'fourteen', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
  ];


  outdoor = [
    {text: 'one ', cols: 1, rows: 2, color: 'lightblue', imageUrl:'{wed_portrait}'},
    {text: 'two', cols: 1, rows: 1, color: 'lightgreen' , imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'three', cols: 1, rows: 1, color: 'lightpink', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'four', cols: 2, rows: 1, color: '#DDBDF1', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},

    {text: 'five', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'six', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'seven', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'eight', cols: 2, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'nine', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'ten', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'eleven', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'twelve', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
  ];




  babywash = [
    {text: 'one ', cols: 1, rows: 2, color: 'lightblue', imageUrl:'{wed_portrait}'},
    {text: 'two', cols: 1, rows: 1, color: 'lightgreen' , imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'three', cols: 1, rows: 1, color: 'lightpink', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'four', cols: 2, rows: 1, color: '#DDBDF1', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},

    {text: 'five', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'six', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'seven', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'eight', cols: 2, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'nine', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'ten', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'eleven', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
    {text: 'twelve', cols: 1, rows: 1, color: 'lightblue', imageUrl:"https://res.cloudinary.com/de0mpuv0c/image/upload/h_400,w_400/v1645794902/BlaackForrest/home/section_three_main_image.png"},
  ];
  weddingTextContent: any;
  outDoorTextContent: any;
  babywashtext:any;
  alltextcontent: any;
  allImageOne: any = [];
  allImagetwo: any =[];
  allImagethree: any = [];
  allImagefour: any =[];
  allImagefive: any=[];
  allImagesix: any=[];
  allImageseven: any=[];
  allImageeight: any=[];
  allImagenine: any=[];
  allImageten: any=[];
  allImageeleven: any=[];
  allImagetwelve: any=[];


  constructor(private apiService: ApiService,  public router: Router, private route: ActivatedRoute,  private routes: ActivatedRoute,
    private viewportScroller: ViewportScroller)
     {


  }

  ngOnInit(): void {

    this.getgallerycontent()
  }

  ngAfterViewInit(): void {
    this.menuIndex = this.route.snapshot.paramMap.get('menuIndex');
  }


  getgallerycontent(){
    this.apiService.getData('getgallerycontent').subscribe(data => {
      const value= data.data;
    this.alltextcontent = value[0].alltextcontent
    this.weddingTextContent = value[0].weddingtextcontent
    this.outDoorTextContent = value[0].outdoorstextcontent
    this.babywashtext = value[0].babywashtextcontent




    this.wedding[0].imageUrl = value[0].weddingpotrait
    this.wedding[1].imageUrl =  value[0].wedding2
    this.wedding[2].imageUrl =  value[0].wedding3
    this.wedding[3].imageUrl =  value[0].wedding4
    this.wedding[4].imageUrl =  value[0].wedding5
    this.wedding[5].imageUrl =  value[0].wedding6
    this.wedding[6].imageUrl =  value[0].wedding7
    this.wedding[7].imageUrl =  value[0].wedding8
    this.wedding[8].imageUrl =  value[0].wedding9
    this.wedding[9].imageUrl =  value[0].wedding10
    this.wedding[10].imageUrl =  value[0].wedding11
    this.wedding[11].imageUrl =  value[0].wedding12
    this.wedding[12].imageUrl =  value[0].wedding13
    this.wedding[13].imageUrl =  value[0].wedding14



    this.outdoor[0].imageUrl = value[0].outdoorportrait
    this.outdoor[1].imageUrl =  value[0].outdoor2
    this.outdoor[2].imageUrl =  value[0].outdoor3
    this.outdoor[3].imageUrl =  value[0].outdoor4
    this.outdoor[4].imageUrl =  value[0].outdoor5
    this.outdoor[5].imageUrl =  value[0].outdoor6
    this.outdoor[6].imageUrl =  value[0].outdoor7
    this.outdoor[7].imageUrl =  value[0].outdoor8
    this.outdoor[8].imageUrl =  value[0].outdoor9
    this.outdoor[9].imageUrl =  value[0].outdoor10
    this.outdoor[10].imageUrl =  value[0].outdoor11
    this.outdoor[11].imageUrl =  value[0].outdoor12




    this.babywash[0].imageUrl = value[0].babywashportrait
    this.babywash[1].imageUrl =  value[0].babywash2
    this.babywash[2].imageUrl =  value[0].babywash3
    this.babywash[3].imageUrl =  value[0].babywash4
    this.babywash[4].imageUrl =  value[0].babywash5
    this.babywash[5].imageUrl =  value[0].babywash6
    this.babywash[6].imageUrl =  value[0].babywash7
    this.babywash[7].imageUrl =  value[0].babywash8
    this.babywash[8].imageUrl =  value[0].babywash9
    this.babywash[9].imageUrl =  value[0].babywash10
    this.babywash[10].imageUrl =  value[0].babywash11
    this.babywash[11].imageUrl =  value[0].babywash12




    this.allImageOne = [value[0].weddingpotrait, value[0].outdoorportrait, value[0].babywashportrait]
    const random1 = Math.floor(Math.random() * this.allImageOne.length);
    this.allImagetwo = [value[0].wedding2, value[0].outdoor2, value[0].babywash2]
    const random2 = Math.floor(Math.random() * this.allImagetwo.length);
    this.allImagethree = [value[0].wedding3, value[0].outdoor3, value[0].babywash3]
    const random3 = Math.floor(Math.random() * this.allImagethree.length);
    this.allImagefour = [value[0].wedding4, value[0].outdoor4, value[0].babywash4]
    const random4 = Math.floor(Math.random() * this.allImagefour.length);
    this.allImagefive = [value[0].wedding5, value[0].outdoor5, value[0].babywash5]
    const random5 = Math.floor(Math.random() * this.allImagesix.length);
    this.allImagesix = [value[0].wedding6, value[0].outdoor6, value[0].babywash6]
    const random6 = Math.floor(Math.random() * this.allImageseven.length);

    this.allImageseven = [value[0].wedding7, value[0].outdoor7, value[0].babywash7]
    const random7 = Math.floor(Math.random() * this.allImageeight.length);

    this.allImageeight = [value[0].wedding8, value[0].outdoor8, value[0].babywash8]
    const random8 = Math.floor(Math.random() * this.allImagenine.length);

    this.allImagenine = [value[0].wedding9, value[0].outdoor9, value[0].babywash9]
    const random9 = Math.floor(Math.random() * this.allImageten.length);

    this.allImageten = [value[0].wedding10, value[0].outdoor10, value[0].babywash10]
    const random10 = Math.floor(Math.random() * this.allImageeleven.length);

    this.allImageeleven = [value[0].wedding11, value[0].outdoor11, value[0].babywash11]
    const random11 = Math.floor(Math.random() * this.allImagetwelve.length);

    this.allImagetwelve = [value[0].wedding12, value[0].outdoor12, value[0].babywash12]













    this.all[0].imageUrl =  this.allImageOne[Math.floor(Math.random() * 3)];
    this.all[1].imageUrl =  this.allImagetwo[Math.floor(Math.random() * 3)];
    this.all[2].imageUrl =  this.allImagethree[Math.floor(Math.random() * 3)];
    this.all[3].imageUrl = this.allImagefour[Math.floor(Math.random() * 3)];
    this.all[4].imageUrl =  this.allImagefive[Math.floor(Math.random() * 3)];
    this.all[5].imageUrl =  this.allImagesix[Math.floor(Math.random() * 3)];
    this.all[6].imageUrl =  this.allImageseven[Math.floor(Math.random() * 3)];
    this.all[7].imageUrl =  this.allImageeight[Math.floor(Math.random() * 3)];
    this.all[8].imageUrl =  this.allImagenine[Math.floor(Math.random() * 3)];
    this.all[9].imageUrl = this.allImageten[Math.floor(Math.random() * 3)];
    this.all[10].imageUrl = this.allImageeleven[Math.floor(Math.random() * 3)];
    this.all[11].imageUrl =  this.allImagetwelve[Math.floor(Math.random() * 3)];
    this.loading = false;



    })

  }
  previewImage(src: String){
this.previewImageSrc = src;
var modalbutton= document.getElementById('previewModal') as HTMLElement
modalbutton.click()
  }

}
