import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitPro'
})
export class SplitProPipe implements PipeTransform {

  transform(value:string): string {
    return value.split(' ').slice(0,2).join(' ');
  }

}
