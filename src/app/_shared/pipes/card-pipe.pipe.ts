import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardPipe'
})
export class CardPipePipe implements PipeTransform {
  // this filters the card list base on the search text entered

  transform(items: any[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }

    const searchTextLowerCase = searchText.toLowerCase();
    return items.filter( (item) => {
      return item.cardNumber.toLowerCase().includes(searchTextLowerCase);
    });
  }

}
