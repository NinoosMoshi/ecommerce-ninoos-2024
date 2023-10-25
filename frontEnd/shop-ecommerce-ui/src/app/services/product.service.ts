import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../common/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/v1/products';

  private categoryUrl = 'http://localhost:8080/api/v1/categories';

  constructor(private http:HttpClient) { }



  getProductList(theCategoryId:number):Observable<Product[]>{

     const searchUrl = `${this.baseUrl}?id=${theCategoryId}`

     return this.http.get<GetResponseProduct>(searchUrl).pipe(
      map(response => response.content)
     )
  }


  getCategories():Observable<Category[]>{
     return this.http.get<GetResponseCategory>(`${this.categoryUrl}/get-all`).pipe(
      map(response => response.content)
     )
  }


  // http://localhost:8080/api/v1/products/search?name=<productName>
  searchProducts(keyword:string):Observable<Product[]>{
    return this.http.get<GetResponseProduct>(`${this.baseUrl}/search?name=${keyword}`).pipe(
      map(response => response.content)
    )
  }



}

interface GetResponseProduct{
  content: Product[],
  totalPages: number,
  totalElements: number,
  size: number,
  number: number
}


interface GetResponseCategory{
  content: Category[],
  totalPages: number,
  totalElements: number,
  size: number,
  number: number
}
