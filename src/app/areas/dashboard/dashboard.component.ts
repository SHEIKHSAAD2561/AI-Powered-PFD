import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  activePage: string = 'dashboard';
  constructor() {

  }
  setActivePage(page: string) {
    this.activePage = page;
  }

  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar?.classList.toggle('collapsed');
    const container = document.querySelector('.dashboard-container');
    if (container) {
      container.classList.toggle('collapsed');
    } else {
      console.error('Error: .dashboard-container element not found.');
    }
  }
}
