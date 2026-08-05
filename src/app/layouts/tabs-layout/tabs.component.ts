import { Component, computed, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { IonTabs, IonTabBar, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { home, homeOutline, settings, settingsOutline, shield, shieldOutline, add, addOutline } from 'ionicons/icons';
import { filter, map, startWith } from 'rxjs/operators';
import { AppStore } from '../../app.store';
import { AppLoadingComponent } from "../../shared/components/app.loading/app.loading.component";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, AppLoadingComponent],
})
export class TabsComponent implements OnInit {
  readonly router = inject(Router);
  readonly appStore = inject(AppStore);

  readonly currentUrl = toSignal(this.router.events.pipe(
    filter((event: any) => event instanceof NavigationEnd),
    map((event: NavigationEnd) => event.urlAfterRedirects),
    startWith(this.router.url)
  ));
  
  readonly homeIcon = computed(
    () => this.currentUrl() === '/tabs/home' 
    ? home : homeOutline);

  readonly currencyIcon = computed(
    () => this.currentUrl() === '/tabs/currency' 
    ? shield : shieldOutline);

  readonly settingsIcon = computed(
    () => this.currentUrl() === '/tabs/analytic' 
    ? settings : settingsOutline);
  
  readonly addIcon = computed(() => this.currentUrl() === "/tabs/add"
    ? add: addOutline);

  async ngOnInit() {
    if(!this.appStore.isAppInitialized()){
      await this.appStore.initialize();
    }
  }
}
