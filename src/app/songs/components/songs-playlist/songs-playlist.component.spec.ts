import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsPlaylistComponent } from './songs-playlist.component';

describe('SongsPlaylistComponent', () => {
  let component: SongsPlaylistComponent;
  let fixture: ComponentFixture<SongsPlaylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongsPlaylistComponent]
    });
    fixture = TestBed.createComponent(SongsPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
