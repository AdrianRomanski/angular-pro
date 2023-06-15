import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsFavouritesComponent } from './songs-favourites.component';

describe('SongsFavouritesComponent', () => {
  let component: SongsFavouritesComponent;
  let fixture: ComponentFixture<SongsFavouritesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongsFavouritesComponent]
    });
    fixture = TestBed.createComponent(SongsFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
