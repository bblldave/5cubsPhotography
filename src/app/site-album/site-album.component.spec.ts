import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAlbumComponent } from './site-album.component';

describe('SiteAlbumComponent', () => {
  let component: SiteAlbumComponent;
  let fixture: ComponentFixture<SiteAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
