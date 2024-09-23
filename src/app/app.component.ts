import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//TODO If I import it as default and have the immediately invoked function there it correctly prints to console.
import '@wolfi/webcomponent';

//TODO If I try to use named export it always fail no matter what I tried. If i add specific d.ts file it will pass typescript check but fail on runtime.
// @ts-ignore
// import { registerComponent } from '@wolfi/webcomponent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple-ng-webcomponent';

  constructor() {
    // registerComponent();
  }
}
