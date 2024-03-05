import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Product:Product[],term:string): Product[] {
    return Product.filter( prod => prod.title.toLowerCase().includes(term.toLowerCase()) );
  }

}
