import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  //templateUrl: './product-list-table.component.html',
  //templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // products!: Product[]; // ! no exclamation point
  // productService: any; // ! ?
  
  products!: Product[];
  currentCategoryId!: number;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.paramMap.subscribe(() => {
    this.listProducts();
    });
  }

  listProducts(){

    // ! check if id parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    // if (hasCategoryId) {
    //   // ! get the id param string, convert string to number using plus symbol
    //   this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
    // }


    this.productService.getProductList().subscribe(
        //(    data: Product[]) => { // ! infer?
        data => {
        this.products = data;
      }
    )
  }

}
