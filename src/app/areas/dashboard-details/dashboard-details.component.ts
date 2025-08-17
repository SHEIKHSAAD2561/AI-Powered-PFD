import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-details',
  templateUrl: './dashboard-details.component.html',
  styleUrls: ['./dashboard-details.component.css']
})
export class DashboardDetailsComponent implements OnInit{
  
  totalExpenses: number = 3450;
  expensesChange: string = '4.5% from last month';
  
  totalSavings: number = 1200;
  savingsMessage: string = 'Good progress!';
  
  biggestExpenseCategory: string = 'Food';
  biggestExpensePercentage: number = 30;
  
  usdToPkrRate: number = 295;
  
  constructor() { }

  ngOnInit(): void {
  }
}
