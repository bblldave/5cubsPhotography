import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxGalleryModule} from 'ngx-gallery';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SiteAlbumComponent } from './site-album/site-album.component';

const appRoutes: Routes = [
   {path: '', redirectTo: '/home', pathMatch: 'full'},
   {path: 'home', component: HomeComponent },
   {path: 'album/:albumName', component: SiteAlbumComponent}
];

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      HomeComponent,
      FooterComponent,
      SiteAlbumComponent
   ],
   imports: [
      BrowserModule,
      NgbModule,
      NgxGalleryModule,
      HttpClientModule,
      RouterModule.forRoot(
         appRoutes
      )
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
