import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDatePipe'
})
export class CustomDatePipePipe implements PipeTransform {

  /*transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/

  // tslint:disable-next-line:typedef
  transform(value: string) {
    const cleanedString = value.substring(0, value.indexOf(' '));
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(cleanedString, 'dd/MM/yyyy');
  }

}
