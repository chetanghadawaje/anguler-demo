import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) {}

  base_url = "http://localhost:3200/"

  getProducts():Observable<any>{
    return this.httpClient.get(this.base_url+"products")
  }

  getProduct(id:String):Observable<any>{
    return this.httpClient.get(this.base_url+"products/"+id)
  }

  createProducts(data:any):Observable<any>{
    return this.httpClient.post(this.base_url+"products", data)
  }
  
  updateProduct(id:String, data:any):Observable<any>{
    return this.httpClient.put(this.base_url+"products/"+ id, data)
  }

  deleteProduct(id:String):Observable<any>{
    return this.httpClient.delete(this.base_url+"products/"+ id)
  }
}
