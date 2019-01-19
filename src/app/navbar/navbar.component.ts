import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private menuService: MenuService) { }
  albums: any;
  ngOnInit() {
    this.menuService.getAlbums().subscribe((data) => {
      this.albums = data;
      console.log(this.albums);
    });
  }

}
