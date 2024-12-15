import { Component } from '@angular/core';
// import { SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk';
import * as Playlist from '../assets/json/playlist.json';
import * as BeatlesArtists from '../assets/json/beatles-artists.json';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'deploy-gitpage';
  resultsArtist: any;
  // resultsArtist: SearchResults<readonly ["artist"]> | undefined;
  playlistID = '6Bbuuyp4KHlCj080ShcqEc';

  playlist: {
    collaborative: boolean;
    description: string;
    external_urls: { spotify: string; };
    followers: { href: any; total: number; };
    href: string;
    id: string;
    images: {};
    name: string;
    owner: { display_name: string; external_urls: { spotify: string; }; href: string; id: string; type: string; uri: string; };
    primary_color: any;
    public: boolean;
    snapshot_id: string;
    tracks: any;
    type: string;
    uri: string;
  } | undefined;

  constructor() {
    // const sdk = SpotifyApi.withUserAuthorization("client-id", "https://localhost:4200", ["scope1", "scope2"]);
    console.log('AppComponent constructor')
    // this.init();
    this.initLocal();
    // this.http
    //   .get('https://api.spotify.com/v1/playlists/6Bbuuyp4KHlCj080ShcqEc/tracks?offset=100&limit=100&locale=fr-CA,fr;q%3D0.9,en-CA;q%3D0.8,en-US;q%3D0.7,en;q%3D0.6').subscribe(results => {
    //     console.log(results);
    // })
  }

  // private async init() {
  //   console.log('AppComponent init')
  //   const api = SpotifyApi.withClientCredentials(
  //     "e8629f625be5446a8434f03c0063ac27",
  //     "4295d01a85154cf3872b4439ecbf01d2"
  //   );
  //
  //   this.resultsArtist = await api.search("The Beatles", ["artist"]);
  //
  //   console.table(this.resultsArtist.artists.items.map((item: any) => ({
  //     name: item.name,
  //     followers: item.followers.total,
  //     popularity: item.popularity,
  //   })));
  //
  //   const playlist = api.playlists.getPlaylist(this.playlistID).then(value => {
  //     console.log('playlist tracks', value)
  //   }).catch(error => {
  //     console.log('playlist tracks', error)
  //   }).finally(() => {
  //     console.log('finally')
  //   })
  //
  // }

  private initLocal() {
    this.resultsArtist = BeatlesArtists;
    this.playlist = Playlist;
  }

  rateTrack(track: any, rating: string) {
    console.log(track, rating)
  }
}
