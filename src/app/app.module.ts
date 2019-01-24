import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxGalleryModule} from 'ngx-gallery';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SiteAlbumComponent } from './site-album/site-album.component';
import { BookSessionComponent } from './book-session/book-session.component';
import { ImageService } from './services/image.service';
import { MenuService } from './services/menu.service';
import { EmailService } from './services/email.service';

const appRoutes: Routes = [
   {path: '', redirectTo: '/home', pathMatch: 'full'},
   {path: 'home', component: HomeComponent },
   {path: 'album/:albumName', component: SiteAlbumComponent},
   {path: 'book', component: BookSessionComponent}
];

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      HomeComponent,
      FooterComponent,
      SiteAlbumComponent,
      BookSessionComponent
   ],
   imports: [
      BrowserModule,
      NgbModule,
      NgxGalleryModule,
      HttpClientModule,
      FormsModule,
      ToastrModule.forRoot(),
      RouterModule.forRoot(
         appRoutes
      )
   ],
   providers: [
      ImageService,
      MenuService,
      EmailService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
