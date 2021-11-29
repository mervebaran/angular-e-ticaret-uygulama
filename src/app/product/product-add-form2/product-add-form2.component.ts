import { AlertifyService } from './../../services/alertify.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add-form2',
  templateUrl: './product-add-form2.component.html',
  styleUrls: ['./product-add-form2.component.css'],
  providers: [CategoryService,ProductService]
})

export class ProductAddForm2Component implements OnInit {
  categoryService: any;
  alertifyService: any;

  constructor(private formBuilder: FormBuilder,
    private catetoryService: CategoryService,
    private productService : ProductService,
    private alertifService : AlertifyService ) { }

  productAddForm!: FormGroup;
  product: Product = new Product();
  categories: Category[] = [];
  
  createProductAddForm(): void {
    this.productAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required],
      price: ["", Validators.required],
      categoryId: ["", Validators.required]

    });
  }

  ngOnInit() {
    this.createProductAddForm();
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.categories = data
    });
  }
    
  add(): void {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value)
    }
    this.productService.addProduct(this.product).subscribe(data=>{
      this.alertifyService.success(data.name + " " + "başarıyla eklendi.")
    });
  }
}
