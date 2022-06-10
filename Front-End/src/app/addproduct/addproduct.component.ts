import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(public productservice:ProductService , public router:Router) {}
   
  products={

    code:"",
    productname:"",
    available:"",
    rating:"",
    price:"",
    imageurl:""
  
  };

  newproducts(){
    this.productservice.addproducts(this.products)
    this.router.navigate(['/products'])
  }

  ngOnInit(): void {
  }

}
