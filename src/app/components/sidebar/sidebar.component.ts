import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface SidebarLink {
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  hideShow = false;

  @Input() links: SidebarLink[] = [];
  @Input() logo: string = '';

  toggleSidebar(): void {
    this.hideShow = !this.hideShow;
  }
}
