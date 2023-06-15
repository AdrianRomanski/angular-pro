import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {SongsListenedComponent} from "./components/song-listened/songs-listened.component";
import {SongsPlaylistComponent} from "./components/songs-playlist/songs-playlist.component";
import {SongsFavouritesComponent} from "./components/songs-favourites/songs-favourites.component";
import {SongsService} from "./services/songs.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    SongsListenedComponent,
    SongsPlaylistComponent,
    SongsFavouritesComponent
  ],
  providers: [
    SongsService
  ]
})
export class SongsModule {

}
