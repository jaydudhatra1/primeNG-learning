import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  public shoppingData: any;
  public pieOptions: any;
  public servicesData: any;
  public barOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.shoppingData = {
      labels: ['Electronics', 'Fashion', 'Home & Kitchen', 'Other'],
      datasets: [
          {
              data: [300, 50, 30, 100],
              backgroundColor: [
                  '#4CC571',
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56',
              ],
              hoverBackgroundColor: [
                  '#4CC571',
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56'
              ]
          }]
      };

    this.pieOptions = {
      title: {
        display: true,
        text: 'Shopping Category (This Week)',
        fontSize: 18
      },
      legend: {
        position: 'top'
      }
    };

    this.servicesData = {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Grand Sale'],
      datasets: [
        {
            label: 'Mobiles',
            backgroundColor: '#42A5F5',
            data: [45, 60, 30, 80]
        },
        {
            label: 'Computers',
            backgroundColor: '#4CC571',
            data: [55, 65, 40, 84]
        },
        {
            label: 'Home Appliances',
            backgroundColor: '#FFCE56',
            data: [35, 60, 49, 92]
        },
        {
            label: 'Kitchen Accessories',
            backgroundColor: '#FF6384',
            data: [48, 67, 59, 76]
        }
      ]
    };

    this.barOptions = {
      legend: {
          labels: {
              fontColor: '#EBEDEF'
          }
      },
      scales: {
          xAxes: [{
              ticks: {
                  fontColor: '#EBEDEF'
              },
              gridLines: {
                  color: 'rgba(255,255,255,0.2)'
              }
          }],
          yAxes: [{
              ticks: {
                  fontColor: '#EBEDEF'
              },
              gridLines: {
                  color: 'rgba(255,255,255,0.2)'
              }
          }]
      }
    };
  }
}
