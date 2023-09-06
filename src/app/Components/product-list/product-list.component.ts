import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // products = [
  //   { name: 'Product 1'},
  //   { name: 'Product 2'},
  //   { name: 'Product 3'}
  // ];

  products = [
    {
      id: 1,
      name: 'Product 1',
      imageUrl: 'favicon.ico'
    },
    {
      id: 2,
      name: 'Product 2',
      imageUrl: 'favicon.ico'
    },
    {
      id: 3,
      name: 'Product 3',
      imageUrl: 'favicon.ico'
    },
    {
      id: 4,
      name: 'Product 4',
      imageUrl: 'favicon.ico'
    }
  ];
}
