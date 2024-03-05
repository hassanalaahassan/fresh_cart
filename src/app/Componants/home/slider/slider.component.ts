import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoriesService } from 'src/app/Services/categories.service';
import { Categories } from 'src/app/interfaces/categories';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit{
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplayHoverPause:true,
    autoplaySpeed:1000,
    autoplay:true,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
       }
      // 400: {
      //   items: 2
      // },
      // 740: {
      //   items: 3
      // },
      // 940: {
      //   items: 4
      // }
    },
    nav: true
  }
  customOptionsTwo: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin:10,
    responsive: {
      0: {
        items: 2
       },
      400: {
        items: 4
      },
      740: {
        items: 6
      },
      940: {
        items: 10
      }
    },
    nav: false
  }
  constructor(private _Categories:CategoriesService){
  }
  categ:Categories[] = []
  ngOnInit(): void {
    this.myCategory()
  }
  myCategory():void{
    this._Categories.getAllCategories().subscribe({
      next:(Response)=>{
        this.categ=Response.data
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
