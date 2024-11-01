import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

import { CookieService } from 'ngx-cookie-service';

import { UpdateService } from './services/update.service';
import { AutoUnsubscribe } from "src/app/helpers/unsub";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgComponentOutlet,
  ],
  styles: ``
})
@AutoUnsubscribe()
export class AppComponent implements OnDestroy {
  public componentList: any[] = [
  ];
  public activeComponent: number | null = null;

  constructor(
    private updateService: UpdateService,
    private cookieService: CookieService, 
  ){
    this.updateService.checkForUpdates();
  }

  ngOnInit(): void {
    let activeButton = this.cookieService.get('activeButton');
    if(['', 'null'].includes(activeButton)) {
      this.activeComponent = null;
    }else {
      this.activeComponent = Number(activeButton);
    }
  }
  onComponentActivate(component: number | null): void {
    this.activeComponent = component;
    this.cookieService.set("activeButton", component !== null ? component.toString() : "null");
  }

  ngOnDestroy(): void {}
}
