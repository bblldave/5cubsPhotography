import { Component, OnInit, Input  } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { ImageService } from '../services/image.service';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-site-album',
  templateUrl: './site-album.component.html',
  styleUrls: ['./site-album.component.scss']
})
export class SiteAlbumComponent implements OnInit {
  error: boolean;
  Title: string;
  GalleryRowCount: number;
  GalleryHeight: number;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  images: any = {};

  constructor(private imgSvc: ImageService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(
      params => {
        this.error = false;
        this.galleryImages = [];
        this.Title = params['albumName'];
        const Title = params['albumName'];
        this.imgSvc.getImages(Title).subscribe((data) => {
          this.images = data;
          this.GalleryRowCount = this.images.length / 2;
          if (this.GalleryRowCount < 1) {
            this.GalleryRowCount = 1;
          }
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
      }
    );

    this.galleryOptions = [
      {
        image: false,
        height: '2000px',
        width: '100%',
        thumbnailsMargin: 25,
        thumbnailMargin: 25,
        thumbnailsColumns: 3,
        thumbnailsRows: 4
      },
      {
        breakpoint: 1200,
        height: '1800px',
        width: '100%',
        image: false,
        thumbnailsColumns: 3,
        thumbnailsRows: 4
      },
      {
        breakpoint: 1000,
        height: '1200px',
        width: '100%',
        thumbnailsColumns: 2,
        thumbnailsRows: 4
      },
      {
        breakpoint: 576,
        height: '2200px',
        width: '100%',
        thumbnailsColumns: 1,
        thumbnailsRows: 4
      }

    ];

  }

}
