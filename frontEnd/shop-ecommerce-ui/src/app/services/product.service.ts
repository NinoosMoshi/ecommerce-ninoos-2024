import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/v1/products';

  constructor(private http:HttpClient) { }



  getProductList():Observable<Product[]>{
     return this.http.get<GetResponse>(`${this.baseUrl}/get-all`).pipe(
      map(response => response.content)
     )
  }



}

interface GetResponse{
  content: Product[],
  totalPages: number,
  totalElements: number,
  size: number,
  number: number
}
