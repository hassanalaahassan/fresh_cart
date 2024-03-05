import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(product:any[]): any[] {
    return product.filter((prod)=>prod.count>0 )
  }

}
