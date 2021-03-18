import { Component, OnInit } from '@angular/core';
import { SelectItem, SortEvent } from 'primeng/api';
import { Product, PRODUCTS } from './product-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public phones: Product[] = PRODUCTS;
  public sortOptions: SelectItem[];
  public sortKey: string;
  public sortField: string;
  public sortOrder: number;

  constructor() { }

  public ngOnInit(): void {
      this.sortOptions = [
        {label: 'Name', value: 'name'},
        {label: 'Price', value: 'price'},
        {label: 'Discount', value: 'discount'}
      ];
  }

  public onSortChange(event): void {
    const value = event.value;

    this.sortOrder = 1;
    this.sortField = value;
  }
}
