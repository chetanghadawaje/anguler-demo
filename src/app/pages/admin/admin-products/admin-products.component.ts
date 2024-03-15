import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import ProdcutInterface from '../../../types/product';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { ProductInitPipe } from '../../../pipes/product-init.pipe';


@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [RouterLink, UpperCasePipe, CurrencyPipe, ProductInitPipe],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css'
})
export class AdminProductsComponent implements OnInit {
  constructor(private productService:ProductService){}

  products:ProdcutInterface[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products)=>{
      console.log(products)
      this.products = products
    })
  }

  DeleteProduct(id:any){
    this.productService.deleteProduct(id).subscribe((data)=>{
      const indexToRemove = this.products.findIndex((object) => object._id === id);
      console.log(indexToRemove)
      this.products.splice(indexToRemove, 1);
      console.log("Delete...")
    })
  }

 
}
