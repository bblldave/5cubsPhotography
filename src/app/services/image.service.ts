import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getImages(album: string) {
    return this.http.get('../../assets/Images/imageData/' + album + '.json');
  }
}
