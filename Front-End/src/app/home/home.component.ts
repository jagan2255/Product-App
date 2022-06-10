import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  products:any={

    code:"",
    productname:"",
    available:"",
    rating:"",
    price:"",
    imageurl:""
  
  };

  constructor(public productservice:ProductService) { }
   

  ngOnInit():void{
             
    this.productservice.getproduct()
    .subscribe(data=>{
      this.products = JSON.parse(JSON.stringify(data))
    })

  }

}
