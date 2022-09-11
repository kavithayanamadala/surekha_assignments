import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
   
  singleproduct:any;
  productid:any;
  product:any[] =[
    { id:1,name: 'Samsung', desc: 'The latest samsung phone', price:20000 },
    { id:2,name: 'Nokia', desc: 'Updated Nokia series', price: 25000 },
    { id:3,name: 'Apple', desc: 'Apple latest', price: 31999 },
    { id:4,name: 'Google pixel', desc: 'Google Pixcel latest', price: 19999 }
     
    ]; 

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.productid=this.activatedRoute.snapshot.paramMap.get('id');
    this.singleproduct=this.product.find(x=> x.id==this.productid)
  }

}
