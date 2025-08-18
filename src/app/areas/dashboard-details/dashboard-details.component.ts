import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

interface WatchlistItem {
  symbol: string;
  currentValue: string;
  change24h: number;
}
@Component({
  selector: 'app-dashboard-details',
  templateUrl: './dashboard-details.component.html',
  styleUrls: ['./dashboard-details.component.css']
})
export class DashboardDetailsComponent implements OnInit {
 watchlistData: WatchlistItem[] = [];
  totalExpenses: number = 3450;
  expensesChange: string = '4.5% from last month';

  totalSavings: number = 1200;
  savingsMessage: string = 'Good progress!';

  biggestExpenseCategory: string = 'Food';
  biggestExpensePercentage: number = 30;

  usdToPkrRate: number = 295;

  data: any;
  options: any;
  linechartdata: any;
  lineChartOptions: any;


  ngOnInit() {
    this.watchlistData = [
      { symbol: 'BTC', currentValue: '$20000', change24h: 1.5 },
      { symbol: 'ETH', currentValue: '$1300', change24h: -2.1 },
      { symbol: 'AAPL', currentValue: '$150', change24h: -0.5 }
    ];
    this.data = {
      labels: ['Food', 'Bills', 'Travel', 'Entertainment', 'Others'],
      datasets: [
        {
          data: [30, 25, 20, 15, 10], // Percentages from the image
          backgroundColor: [
            '#4f80ff', // Blue
            '#9400d3', // Purple
            '#ff7f50', // Orange
            '#32cd32', // Green
            '#ff6b81'  // Red
          ]
        }
      ]
    };

    this.options = {
      plugins: {
        legend: {
          position: 'right', // Places the legend on the right side
          labels: {
            usePointStyle: true, // Use a dot for the legend marker
            boxWidth: 8 // Adjust the size of the color marker
          }
        },
        tooltip: {
          callbacks: {
            label: (tooltipItem: any) => {
              const label = tooltipItem.label || '';
              const value = tooltipItem.raw || 0;
              return `${label}: ${value}%`;
            }
          }
        }
      }
    };


    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.linechartdata = {
      labels: ['Jan 1', 'Jan 3', 'Jan 9', 'Jan 11', 'Jan 15', 'Jan 18', 'Jan 22', 'Jan 25'],
      datasets: [
        {
          data: [100, 250, 180, 350, 280, 420, 380, 500],
          fill: true,
          borderColor: '#4f80ff', // A blue color from the total expenses card
          backgroundColor: 'rgba(79, 128, 255, 0.2)', // Semi-transparent blue for the area fill
          tension: 0.4, // Adjust for a slightly curved line
          pointBorderColor: '#fff',
          pointBackgroundColor: '#4f80ff',
          pointRadius: 6,
          pointHoverRadius: 8
        }
      ]
    };

    this.lineChartOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.5,
      scales: {
        x: {
          grid: {
            display: false // Hides the vertical grid lines
          },
          ticks: {
            color: '#666'
          }
        },
        y: {
          grid: {
            color: 'rgba(0, 0, 0, 0.1)' // Light gray horizontal grid lines
          },
          ticks: {
            color: '#666',
            callback: function (value: any) {
              return '$' + value; // Adds a dollar sign to the Y-axis labels
            }
          },
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: false // Hides the legend as there is only one dataset
        },
        tooltip: {
          callbacks: {
            label: function (context: any) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
              }
              return label;
            }
          }
        }
      }
    }
  }



}
