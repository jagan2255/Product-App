import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

products=[{

  code:"",
  productname:"",
  available:"",
  rating:"",
  price:"",
  imageurl:""

}]
  constructor(public productservice:ProductService) { }

  ngOnInit(): void {
    this.productservice.getproduct()
    .subscribe(data=>{
      this.products = JSON.parse(JSON.stringify(data))
    })
  }

}
