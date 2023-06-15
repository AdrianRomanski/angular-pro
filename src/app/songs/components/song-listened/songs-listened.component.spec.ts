import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsListenedComponent } from './songs-listened.component';

describe('SongListenedComponent', () => {
  let component: SongsListenedComponent;
  let fixture: ComponentFixture<SongsListenedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongsListenedComponent]
    });
    fixture = TestBed.createComponent(SongsListenedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
