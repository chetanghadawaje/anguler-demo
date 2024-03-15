import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productInit',
  standalone: true
})
export class ProductInitPipe implements PipeTransform {

  transform(value: string | any, categorys: string|any ): string {
    if(categorys?.toUpperCase() == "CLOTHING"){
      return "P - " + value;
    }else
      return "G - " + value;
  }
}
