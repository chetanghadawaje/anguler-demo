import { Component, SimpleChanges, Input } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import ProdcutInterface from '../../types/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  @Input() product_list:ProdcutInterface[] = []
  api_product_values:ProdcutInterface[] = []

  constructor(private productService:ProductService){
    console.log("Constructor")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Change..")
  }

  ngOnInit(){
    console.log("Init")
    this.productService.getProducts().subscribe((data)=>{
      this.product_list = data
      console.log(data)
      this.api_product_values = data
    })
  }
  
  ngOnDestroy(): void {
    console.log("Destroy")
  }

  removeProduct(obj_id:any){
    const indexToRemove = this.product_list.findIndex((object) => object._id === obj_id);
    console.log("Remove Index: ", indexToRemove);
    delete this.product_list[indexToRemove];
  }

  // DeleteProduct(id:any){
  //   this.productService.deleteProduct(id).subscribe((data)=>{
  //     console.log(data)
  //     const indexToRemove = this.product_list.findIndex((object) => object._id === id);
  //     console.log("Remove Index: ", indexToRemove);
  //     delete this.product_list[indexToRemove];
  //   })
  // }

  serachProduct(data:any){
    let value:String = data.target.value 
    this.product_list = this.api_product_values.filter( product => product.name?.toLowerCase().includes(value?.toLowerCase()) );
  }

}
