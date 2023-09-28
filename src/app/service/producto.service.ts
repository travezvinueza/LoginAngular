import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:8080"

  constructor(private httpClient: HttpClient) { }

  public addProduct1(productObject: any) {
    return this.httpClient.post<Producto>(this.baseUrl + "/add", productObject);
  }

  public getProductById(pid:any){
    return this.httpClient.get<Producto>(this.baseUrl + "/get/by/id/"+ pid)
  }

  public getAllProduct(){
    return this.httpClient.get<Producto[]>(this.baseUrl + "/all")
  }
}
