import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ApiService } from 'src/app/services.service';
import { Router } from "@angular/router";
import { FormsModule,FormBuilder,FormGroup, NgForm } from '@angular/forms';
import { FileUploadService } from '../file-upload.service';
import { HostListener } from '@angular/core';
// import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
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

  loading : boolean = false;
  bride_groomname : any  = ""
  phone : any = ""
  city : any = ""
  event : any = ""
  eventdate : any = ""
  location : any = ""
  careername: any;
  careermobile: any;
  resume: any;
  showerror : boolean = false
  show: boolean = false;
  show2: boolean = false;
  show3: boolean = false;
  imageChangedEvent: any = '';
  mindate : any = ""


  constructor(private apiService: ApiService,  public router: Router,  ) { }

  ngOnInit(): void {
    this.getDate();

  }
  getDate(){
    var date:any = new Date();
    var toDate:any = date.getDate();
     if(toDate < 10){
        toDate = '0' + toDate;
      }

      var month:any = date.getMonth() + 1;
      if(month < 10){
        month = '0' + month

      }
      var year = date.getFullYear();
      this.mindate = year + "-" + month  + "-" + toDate

}
  validate(){
    if(this.bride_groomname.length==0|| this.phone.length ==0 || this.city.length==0 || this.event.length==0 || this.eventdate.length==0 || this.location.lenght==0){
      this.openpopup3();

    }

  }
openpopup(){
  this.show = true;
}
  contactus(form :NgForm){
    this.loading = true;
    const value = {
      bride_groomname : this.bride_groomname,
      phone:this.phone,
      city : this.city,
      event : this.event,
      eventdate : this.eventdate,
      location : this.location
    }
    this.apiService.postData(value,'storeTestimony').subscribe((data)=>{
      if (data.error === false) {

        console.log("success")
        this.bride_groomname = ''
        this.phone = ''
        this.city = ''
        this.event = ''
        this.eventdate = ''
        this.location = ''
        this.loading = false;
        this.openpopup2();
        form.reset();




      }
      else {
        console.log("try again some time");


      }

    },error =>{
      this.loading = false
    })


  }



  resumedrop(form: NgForm){
    this.loading = true;
    const carrier = {
      name	 : this.careername,
      mobile : this.careermobile,
      resume : this.resume

    }
    this.apiService.postData(carrier,'storecareers').subscribe((data)=>{
      if (data.error === false && this.careermobile.length === 10 && typeof(this.careermobile === Number)) {
        console.log("success")
        this.loading = false;
        this.careername = '',
        this.careermobile = ''
         this.resume = ''
         form.reset();
         this.openpopup2();

      }
      else {
        console.log("try again some time")
         this.openpopup();
      }

    },error =>{
      this.loading = false
    })


  }
  closepopup(){
    this.show = false;
  }
  closepopup2(){
    this.show2= false;

  }
  openpopup2(){
    this.show2 = true;
  }
  openpopup3(){
    this.show3 = true;
  }
  closepopup3(){
    this.show3= false;
  }




  }




