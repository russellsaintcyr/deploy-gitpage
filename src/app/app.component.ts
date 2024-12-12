import { Component } from '@angular/core';
import { SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'deploy-gitpage';
  resultsArtist: SearchResults<readonly ["artist"]> | undefined;
  playlistID = '6Bbuuyp4KHlCj080ShcqEc';

  constructor() {
    // const sdk = SpotifyApi.withUserAuthorization("client-id", "https://localhost:4200", ["scope1", "scope2"]);
    console.log('AppComponent constructor')
    this.init();
  }

  private async init() {
    console.log('AppComponent init')
    const api = SpotifyApi.withClientCredentials(
      "e8629f625be5446a8434f03c0063ac27",
      "4295d01a85154cf3872b4439ecbf01d2"
    );

    this.resultsArtist = await api.search("The Beatles", ["artist"]);

    console.table(this.resultsArtist.artists.items.map((item: any) => ({
      name: item.name,
      followers: item.followers.total,
      popularity: item.popularity,
    })));

    const playlist = api.playlists.getPlaylist(this.playlistID).then(value => {
      console.log('playlist tracks', value)
    }).catch(error => {
      console.log('playlist tracks', error)
    }).finally(() => {
      console.log('finally')
    })

  }
}
