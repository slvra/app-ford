import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CardComponent } from '../../components/card/card.component';
import { LogoutBtnComponent } from '../../components/logout-btn/logout-btn.component';

@Component({
  selector: 'app-home',
  imports: [SidebarComponent, CardComponent, LogoutBtnComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
