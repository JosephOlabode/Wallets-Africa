import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'customDatePipe'
})
export class CustomDatePipePipe implements PipeTransform {

  /*transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/

  // tslint:disable-next-line:typedef
  transform(value: string) {
    const cleanedDate = value.substring(0, value.indexOf(' '));
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(cleanedDate, 'dd/MM/yyyy');
  }

}
