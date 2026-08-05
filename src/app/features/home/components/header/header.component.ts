import { Component, inject } from '@angular/core';
import { AuthStore } from '../../../auth/stores/auth.store';
import { IonAvatar, IonText} from "@ionic/angular/standalone";
import { MoreButtonComponent } from "../../../../shared/components/more.button/more.button.component";

@Component({
  selector: 'home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonAvatar, IonText, MoreButtonComponent],
})
export class HeaderComponent{
  readonly user = inject(AuthStore).user;
}
