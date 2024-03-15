import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  constructor(private productService:ProductService, private router:Router){}

  name = new FormControl("", [Validators.required, Validators.minLength(3)])
  price = new FormControl("", [Validators.required, Validators.min(1)])
  imageUrl = new FormControl("", [Validators.required])
  category = new FormControl("", [Validators.required])

  productForm = new FormGroup({
    name:this.name,
    price:this.price,
    imageUrl:this.imageUrl,
    category:this.category
  })
  
  error_messgae:any = {
    name_valid: [],
    price: [],
    imageUrl: [],
    category: [],
  }

  createProduct(){
    this.error_messgae = {
      name_valid: ["Name is Requerd", "Name is min 3"],
      price: ["Price is Requerd"],
      imageUrl: ["Price is imageUrl"],
      category: ["Price is category"],
    }
    console.log(this.productForm.value)

    this.productService.createProducts(this.productForm.value).subscribe((data)=>{
      console.log(data);
      this.router.navigate(["/admin/products"])
    })

  }

}
