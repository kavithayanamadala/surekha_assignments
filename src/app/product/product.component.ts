import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:any[] =[
    { id:1,name: 'Samsung' },
    {id:2, name: 'Nokia'},
    {id:3 ,name: 'Apple'},
    {id:4, name: 'Google pixel' }
     
    ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
