import { Component, Input } from '@angular/core';
import ProdcutInterface from '../../types/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product:ProdcutInterface = {};

  constructor(private deleteProduct:ProductService){}

  DeleteProduct(id:any){
    this.deleteProduct.deleteProduct(id).subscribe((data)=>{
      console.log(data)
    })
  }
}
