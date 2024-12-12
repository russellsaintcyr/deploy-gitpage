import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'deploy-gitpage';
  resultsArtist: SearchResults<readonly ["artist"]> | undefined;

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
  }
}
