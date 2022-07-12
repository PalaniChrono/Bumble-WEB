
import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ApiService } from 'src/app/services.service';
import { Router } from "@angular/router";
import { FormsModule,FormBuilder,FormGroup, NgForm } from '@angular/forms';
import { FileUploadService } from '../file-upload.service';
// import { RouterModule } from '@angular/router';
import { HostListener } from '@angular/core';




@Component({
  selector: 'app-bookuspage',
  templateUrl: './bookuspage.component.html',
  styleUrls: ['./bookuspage.component.css']
})
export class BookuspageComponent implements OnInit {
  bookusBrideName:any
  bookusGroomName:any
  bookusEventName:any
  bookusEventDate:any
  bookusTime:any
  bookusEventvenue:any
  bookusEventCity:any
  bookusEnquirerName:any
  bookusEnquirerPhone:any
  bookusEnquirerEmail:any
  dynamicEventInputs:any= []

  Variation:any=[]
  clickvalue:any=1

  value:any
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

  show2: boolean = false;
  show3: boolean = false;
  mindate : any = ""


  constructor(private apiService: ApiService,  public router: Router,  ) { }


  ngOnInit(): void {
    this.getDate();
    this.Variation.push({event_name:'',event_date:'',event_time:'',venue:'',city:''})
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
    this.openpopup3();

   }

  Bookus(form :NgForm){
    this.loading = true;
    const bookus = {
      bride_name:this.bookusBrideName,
      groom_name:this.bookusGroomName,
       enquire_name:this.bookusEnquirerName,
       enquire_mobile_no:this.bookusEnquirerPhone,
      email_id:this.bookusEnquirerEmail,
      variation:this.Variation

    }
    this.apiService.postData(bookus,'storebookus').subscribe((data)=>{
      if (data.error === false) {
        // this.Variation.length=1
      console.table
        console.log("success")
        this.loading = false;
        this.bookusBrideName = '',
        this.bookusGroomName = '',
        this.bookusEventName = '',
        this.bookusEventDate = '',
        this.bookusTime = '',
        this.bookusEventvenue = '',
        this.bookusEventCity = '',
        this.bookusEnquirerName = '',
        this.bookusEnquirerPhone = '',
        this.bookusEnquirerEmail = '',


        form.reset();
        this.openpopup2();
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/bookus']); // navigate to same route
      });
      }
      else {
        console.log("try again some time")
      }

    },error =>{
      this.loading = false
    })

  }
  closepopup2(){
    this.show2= false;

  }
  openpopup2(){
    this.show2 = true;
  }
  openpopup3()
{
  this.show3=true;
}
closepopup3(){
  this.show3= false;
}

removeEvent(i:any){
  this.Variation.splice(i,1)

}
addEvent(){
  // this.clickvalue = this.clickvalue+10
  // alert(this.Variation.length)
  // if(this.Variation.length>0){
  //   this.Variation.push({event_name:this.Variation.event_name,event_date:this.Variation.event_date,event_time:this.Variation.event_time,venue:this.Variation.venue,city:this.Variation.city})


  // }
  // else{
      this.Variation.push({event_name:'',event_date:'',event_time:'',venue:'',city:''})
  // }

  console.log("afer",this.Variation)
}

// timechecking(value:any){
//   var timechnage = value
//   var timeSplit = timechnage.value.split(':'),
//   hours,
//     minutes,
//     meridian;
//   hours = timeSplit[0];
//   minutes = timeSplit[1];
//   if (hours > 12) {
//     meridian = 'PM';
//     hours -= 12;
//   } else if (hours < 12) {
//     meridian = 'AM';
//     if (hours == 0) {
//       hours = 12;
//     }
//   } else {
//     meridian = 'PM';
//   }
//   alert(timeSplit);
//   timeSplit=this.bookusTime
// }




}


