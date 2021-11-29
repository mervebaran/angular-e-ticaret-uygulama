import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ActivatedRoute } from '@angular/router';

// declare let alertify:any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(
    private alertifyService: AlertifyService,
    private productService:ProductService,
    private activatedRoute:ActivatedRoute,
  ) { }
  title = "Ürün Listesi"
  products: Product[] | undefined;


  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
     alert(categoryId)
    this.productService.getProducts(params["categoryId"]).subscribe(data=>{
      this.products = data
    });
   })

  }
  
  addToCart(product: any) {
    this.alertifyService.success(product.name +" " + "added")
    // alertify.success(product.name + " " + "added")
    // alert("Sepete Eklendi:" + product.name)
  }

}
function categoryId(categoryId: any) {
  throw new Error('Function not implemented.');
}

