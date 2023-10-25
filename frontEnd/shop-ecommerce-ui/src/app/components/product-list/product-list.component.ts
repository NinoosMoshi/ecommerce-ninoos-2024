import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products:Product[] = [];
  currenCategoryId!:number;
  searchMode:boolean = false;

  constructor(private productService:ProductService,
              private route:ActivatedRoute){}

  ngOnInit(){
     this.route.paramMap.subscribe(() =>{
       this.listProducts();
     })
  }

  listProducts(){

    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if(this.searchMode){
      this.handleSearchProducts();
    }
    else{
      this.handleListProducts();
    }

  }



  handleListProducts(){
    const categoryId:boolean = this.route.snapshot.paramMap.has('id');

    if(categoryId){
      this.currenCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }else{
      this.currenCategoryId = 1;
    }

    this.productService.getProductList(this.currenCategoryId).subscribe({
      next:res =>{
        this.products = res;
      },
      error:err =>{

      }
    })
  }


  handleSearchProducts(){
     const theKeyword = this.route.snapshot.paramMap.get('keyword')!;
     this.productService.searchProducts(theKeyword).subscribe({
      next:res =>{
        this.products = res
      },
      error:err =>{

      }
     })
  }



}
