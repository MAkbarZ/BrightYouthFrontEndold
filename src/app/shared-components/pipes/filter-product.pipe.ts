import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value:any[], filterString:string, propertyName:string): any[] {
    const result:any[] = [];
    if (!value || filterString==='' || propertyName==='') {
      return value;
    } 
    value.forEach((a:any)=>{
      if (a[propertyName].trim().toLowerCase().includes(filterString.toLowerCase())) {
        result.push(a);
        // return result;
      }
    });
    return result;
    
  }

}
