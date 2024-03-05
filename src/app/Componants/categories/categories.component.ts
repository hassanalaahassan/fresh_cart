import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';
import { Category } from 'src/app/interfaces/product';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  constructor(private _Categories:CategoriesService){}

  categoryList:Category[]=[]
  ngOnInit(): void {
    this.getCategory()
  }
  getCategory():void{
    this._Categories.getAllCategories().subscribe(
      {
        next:(response)=>{
          this.categoryList=response.data
          console.log(this.categoryList);
        }
      }
    )

  }
}
