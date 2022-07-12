import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookuspageComponent } from './bookuspage/bookuspage.component';
import { HomeComponent } from './Components/home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicepageComponent } from './servicepage/servicepage.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'gallery',component:GalleryComponent},
  {path: 'gallery/:menuIndex', component: GalleryComponent},

  {path:'services',component:ServicepageComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'bookus',component:BookuspageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true,
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// RouterModule.forRoot(ROUTES ,{ useHash: true }),]
