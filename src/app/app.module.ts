import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
 import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
 import { CarouselModule } from 'ngx-owl-carousel-o';
 import {MatGridListModule} from '@angular/material/grid-list';
 import {MatTabsModule} from '@angular/material/tabs';
 import {MatCardModule} from '@angular/material/card';
 import {MatInputModule} from '@angular/material/input';
 import { HttpClientModule } from '@angular/common/http';
 import { FormsModule } from '@angular/forms';
 import { AngularFileUploaderModule } from "angular-file-uploader";
import { ReactiveFormsModule } from '@angular/forms';








import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicepageComponent } from './servicepage/servicepage.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BookuspageComponent } from './bookuspage/bookuspage.component';
import { UploadsComponent } from './uploads/uploads.component';
import { from } from 'rxjs';
// import { NgxFileDropComponent } from 'ngx-file-drop';
// import { NgxFileDropModule } from 'ngx-file-drop';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent,
    ServicepageComponent,
    ContactusComponent,
    BookuspageComponent,
    UploadsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    CarouselModule,
    MatGridListModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    AngularFileUploaderModule,
    ReactiveFormsModule,
    // NgxFileDropComponent,
    // NgxFileDropModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
