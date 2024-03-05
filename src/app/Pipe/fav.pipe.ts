import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'fav'
})
export class FavPipe implements PipeTransform {

  transform(arr:Product[],id:string[]): any {
    const myArrey:Product[] = []
    for (let i = 0; i < id.length; i++) {

        for (let x = 0; x < arr.length; x++) {

          if(id[i]==arr[x]._id){
            myArrey.push(arr[x])
            break
          }

        }

    };
    return myArrey
  }

}
