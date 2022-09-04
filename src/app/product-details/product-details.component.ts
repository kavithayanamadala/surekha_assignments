import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  /* product:any[] =[
    { name: 'samsung', desc: 'The latest samsung phone', price:20000 },
    { name: 'vivo', desc: 'Updated vivo series', price: 25000 },
    { name: 'nokia', desc: 'Nokia latest', price: 11999 }
     
    ]; */

  constructor() { }

  ngOnInit(): void {
  }

}
