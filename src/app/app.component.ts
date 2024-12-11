import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpotifyApi } from '@spotify/web-api-ts-sdk';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'deploy-gitpage';

  constructor() {
    // const sdk = SpotifyApi.withUserAuthorization("client-id", "https://localhost:4200", ["scope1", "scope2"]);
    console.log('AppComponent constructor')
    this.init();
  }

  private async init() {
    console.log('AppComponent init')
    const api = SpotifyApi.withClientCredentials(
      "your-client-id",
      "your-client-secret"
    );

    const items = await api.search("The Beatles", ["artist"]);

    console.table(items.artists.items.map((item: any) => ({
      name: item.name,
      followers: item.followers.total,
      popularity: item.popularity,
    })));
  }
}
