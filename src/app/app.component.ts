import { Component } from '@angular/core';
import { routerTransition } from './app.animations';

@Component({
  selector: 'remoteink-root',
  animations: [routerTransition],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'introverse';

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
}
