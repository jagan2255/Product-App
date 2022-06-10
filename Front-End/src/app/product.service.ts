import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }

  getproduct(){
      return this.http.get("http://localhost:3000/products")
  }

  addproducts(item:any){
    return this.http.post("http://localhost:3000/add" , {product:item})
    .subscribe((data)=>{
      console.log(data)
    })

  }

}
