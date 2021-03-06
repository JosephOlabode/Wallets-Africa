import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  searchText: any;
  cards = CARDS;
  selectedCard: any;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  openLg(content: any) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  // tslint:disable-next-line:typedef
  initialize(card: any, content: any) {
    this.selectedCard = card;
    this.openLg(content);
  }
}

const CARDS = [
  {
    cardNumber: '6884 2477 9500 8709',
    cardType: 'visa',
    cardCurrency: 'USD',
    cardName: 'Fash Holmes',
    cardAddress: '3b  Parklands Avenue',
    zipCode: 98556,
    cvv: 234,
    cardBalance: 500,
    isActive: true,
    expiryMonth: '09',
    expiryYear: '23',
    transactions: [
      {
        amount: 50,
        narration: 'Grocery Shopping',
        transactionType: 'dr',
        transactionDate: '2020-05-15T03:51:03 -01:00'
      },
      {
        amount: 500,
        narration: 'Transaction Refund Alibaba',
        transactionType: 'cr',
        transactionDate: '2020-05-16T05:11:40 -01:00'
      },
      {
        amount: 250,
        narration: 'Flight ticket to Doha',
        transactionType: 'dr',
        transactionDate: '2020-06-19T09:54:32 -01:00'
      },
      {
        amount: 250,
        narration: 'Camera Purchase',
        transactionType: 'dr',
        transactionDate: '2020-06-19T09:54:32 -01:00'
      }
    ]
  },
  {
    cardNumber: '6884 2477 9500 1209',
    cardType: 'visa',
    cardCurrency: 'USD',
    cardName: 'Fash Holmes',
    cardAddress: '3b  Parklands Avenue',
    zipCode: 98556,
    cvv: 234,
    cardBalance: 50,
    isActive: false,
    expiryMonth: '10',
    expiryYear: '23',
    transactions: []
  },
  {
    cardNumber: '6884 2477 9500 8345',
    cardType: 'MasterCard',
    cardCurrency: 'USD',
    cardName: 'Funso Dan',
    cardAddress: '2b Stoke road kingston upon Thames',
    zipCode: 98556,
    cvv: 134,
    cardBalance: 50,
    isActive: true,
    expiryMonth: '11',
    expiryYear: '22',
    transactions: [
      {
        amount: 70,
        narration: 'Monthly Oyster Card',
        transactionType: 'dr',
        transactionDate: '2020-11-15T07:34:09 -01:00'
      },
      {
        amount: 50,
        narration: 'Donation to Cancer Charity',
        transactionType: 'dr',
        transactionDate: '2020-10-02T01:03:32 -01:00'
      },
      {
        amount: 550,
        narration: 'Card Funding from bank',
        transactionType: 'cr',
        transactionDate: '2020-09-12T12:40:27 -01:00'
      }
    ]
  },
  {
    cardNumber: '6884 2477 9500 8103',
    cardType: 'visa',
    cardCurrency: 'NGN',
    cardName: 'Tobi Jones',
    cardAddress: '2b Stoke road kingston upon Thames',
    zipCode: 98556,
    cvv: 134,
    cardBalance: 50,
    isActive: true,
    expiryMonth: '11',
    expiryYear: '22',
    transactions: [
      {
        amount: 70,
        narration: 'Monthly Oyster Card',
        transactionType: 'dr',
        transactionDate: '2020-11-15T07:34:09 -01:00'
      },
      {
        amount: 50,
        narration: 'Donation to Cancer Charity',
        transactionType: 'dr',
        transactionDate: '2020-10-02T01:03:32 -01:00'
      },
      {
        amount: 550,
        narration: 'Card Funding from bank',
        transactionType: 'cr',
        transactionDate: '2020-11-12T12:40:27 -01:00'
      }
    ]
  },
  {
    cardNumber: '6884 2477 9500 8790',
    cardType: 'mastercard',
    cardCurrency: 'NGN',
    cardName: 'Fash Holmes',
    cardAddress: '3b  Parklands Avenue',
    zipCode: 98556,
    cvv: 234,
    cardBalance: 500,
    isActive: false,
    expiryMonth: '09',
    expiryYear: '23',
    transactions: [
      {
        amount: 499.99,
        narration: 'Card funding from bank',
        transactionType: 'dr',
        transactionDate: '2020-10-16T07:32:38 -01:00'
      },
      {
        amount: 449.99,
        narration: 'DJI Mavic Mini',
        transactionType: 'dr',
        transactionDate: '2020-10-26T23:13:24 -01:00'
      },
      {
        amount: 449.99,
        narration: 'DJI Mavic Mini Refund',
        transactionType: 'cr',
        transactionDate: '2020-10-29T11:17:45 -01:00'
      },
      {
        amount: 499.99,
        narration: 'PS5',
        transactionType: 'dr',
        transactionDate: '2020-11-16T03:51:03 -01:00'
      }
    ]
  }
];

