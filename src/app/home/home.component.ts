import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  error: boolean;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];
  images: any = {};
  constructor(private imgSvc: ImageService) { }

  ngOnInit() {
    this.error = false;
    this.imgSvc.getImages('HomePage').subscribe((data) => {
      this.images = data;
      console.log(this.images);
      for (const element of this.images) {
        const image = {
          small: element.url,
          medium: element.url,
          big: element.url
        };
        this.galleryImages.push(image);
      }
    }, error => {
      this.error = true;
    });


    this.galleryOptions = [
      {
        image: false,
        height: '400px',
        width: '100%',
        thumbnailsMargin: 0,
        thumbnailMargin: 0,
        thumbnailsColumns: 8,
        thumbnailsRows: 2,
      },
      {
        breakpoint: 1200,
        height: '500px',
        image: false,
        thumbnailsColumns: 4,
        thumbnailsRows: 2,
      },
      {
        breakpoint: 768,
        height: '1200px',
        thumbnailsColumns: 2,
        thumbnailsRows: 4
      },
      {
        breakpoint: 576,
        height: '2200px',
        thumbnailsColumns: 1,
        thumbnailsRows: 5
      }

    ];
  }

}
