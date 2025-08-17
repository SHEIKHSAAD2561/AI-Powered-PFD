import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor()
  {

  }
  toggleSidebar() {
  const container = document.querySelector('.dashboard-container');
  if (container) { // Add this null check
    container.classList.toggle('collapsed');
  } else {
    // Optional: Log an error if the element is not found
    console.error('Error: .dashboard-container element not found.');
  }
}
}
