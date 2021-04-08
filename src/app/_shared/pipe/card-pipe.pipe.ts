import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardPipe'
})
export class CardPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
