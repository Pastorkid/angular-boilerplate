import { ChangeDetectionStrategy, Component } from '@angular/core';


import { AppVersionComponent } from './components/app-version/app-version.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AppVersionComponent,
],
  styles: ``
})
export class AppComponent {
}
