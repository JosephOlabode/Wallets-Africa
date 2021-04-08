import {Inject, Component, OnInit, AfterViewInit, ElementRef, TemplateRef, Input, AfterViewChecked} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit{

  page = 1;
  pageSize = 4;
  collectionSize = COUNTRIES.length;
  countries!: Country[];
  transactions = TRANSACTIONS;

  constructor(private modalService: NgbModal) {
    this.refreshCountries();
  }
  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  openLg(content: any) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  ngAfterViewInit(): void {

  }

  // tslint:disable-next-line:typedef
  refreshCountries() {
    this.countries = COUNTRIES
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}

interface Country {
  id?: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'France',
    flag: 'c/c3/Flag_of_France.svg',
    area: 640679,
    population: 64979548
  },
  {
    name: 'Germany',
    flag: 'b/ba/Flag_of_Germany.svg',
    area: 357114,
    population: 82114224
  },
  {
    name: 'Portugal',
    flag: '5/5c/Flag_of_Portugal.svg',
    area: 92090,
    population: 10329506
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'Vietnam',
    flag: '2/21/Flag_of_Vietnam.svg',
    area: 331212,
    population: 95540800
  },
  {
    name: 'Brazil',
    flag: '0/05/Flag_of_Brazil.svg',
    area: 8515767,
    population: 209288278
  },
  {
    name: 'Mexico',
    flag: 'f/fc/Flag_of_Mexico.svg',
    area: 1964375,
    population: 129163276
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'India',
    flag: '4/41/Flag_of_India.svg',
    area: 3287263,
    population: 1324171354
  },
  {
    name: 'Indonesia',
    flag: '9/9f/Flag_of_Indonesia.svg',
    area: 1910931,
    population: 263991379
  },
  {
    name: 'Tuvalu',
    flag: '3/38/Flag_of_Tuvalu.svg',
    area: 26,
    population: 11097
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

const TRANSACTIONS = {
  allTransactions: [
    {
      amount: 200.00,
      date: '2021-04-03T22:28:27.18',
      reference: 'S658285',
      category: 'Wallet Topup',
      narration: 'Bank Transfer from Wallets Africa',
      balance: 7036.97,
      transactionType: 1
    },
    {
      amount: 1.73,
      date: '2021-04-03T22:27:17.59',
      reference: 'D576196',
      category: 'Bank Transfer VAT Fee',
      narration: 'VAT',
      balance: 6836.97,
      transactionType: 2
    },
    {
      amount: 23.00,
      date: '2021-04-03T22:27:17.29',
      reference: 'E753306',
      category: 'Bank Transfer Charges',
      narration: 'Transaction charge for bank transfer',
      balance: 6838.70,
      transactionType: 2
    },
    {
      amount: 200.00,
      date: '2021-04-03T22:26:52.447',
      reference: 'H686844',
      category: 'Bank Transfer',
      narration: 'Sent money to AGHAMA WILLIAMS\'s bank account.',
      balance: 6861.70,
      transactionType: 2
    },
    {
      amount: 100.00,
      date: '2021-03-26T10:59:03.987',
      reference: 'R650811',
      category: 'Wallet Transfer',
      narration: 'Received money from CHUKWUNWEIKE BOLUM',
      balance: 7061.70,
      transactionType: 1
    },
    {
      amount: 100.00,
      date: '2021-03-26T10:58:37.867',
      reference: 'D941206',
      category: 'Airtime Purchase',
      narration: 'Bought MTN airtime for 08063020409',
      balance: 6961.70,
      transactionType: 2
    },
    {
      amount: 100.00,
      date: '2021-03-26T09:37:43.54',
      reference: 'H116647',
      category: 'Wallet Transfer',
      narration: 'Received money from OLADIPUPO FOLARIN',
      balance: 7061.70,
      transactionType: 1
    },
    {
      amount: 100.00,
      date: '2021-03-26T09:35:54.91',
      reference: 'A516145',
      category: 'Airtime Purchase',
      narration: 'Bought MTN airtime for 08098090495',
      balance: 6961.70,
      transactionType: 2
    },
    {
      amount: 2688.40,
      date: '2021-03-25T09:43:05.38',
      reference: 'K298097',
      category: 'Dollar Card Withdrawal',
      narration: 'Dollar Card Withdrawal at exchange rate: 470.00',
      balance: 7061.70,
      transactionType: 1
    },
    {
      amount: 2475.00,
      date: '2021-03-25T09:42:35.04',
      reference: 'P490411',
      category: 'Dollar Card Topup',
      narration: 'Dollar Card Topup via Wallet at exchange rate: 495.00',
      balance: 4373.30,
      transactionType: 2
    },
    {
      amount: 2475.00,
      date: '2021-03-25T09:42:17.4',
      reference: 'W031281',
      category: 'Wallet Reversal',
      narration: 'Reversal: Dollar Card Topup via Wallet',
      balance: 6848.30,
      transactionType: 1
    },
    {
      amount: 2475.00,
      date: '2021-03-25T09:42:15.42',
      reference: 'F988745',
      category: 'Dollar Card Topup',
      narration: 'Dollar Card Topup via Wallet at exchange rate: 495.00',
      balance: 4373.30,
      transactionType: 2
    },
    {
      amount: 1.00,
      date: '2021-03-21T21:16:25.997',
      reference: 'C737251',
      category: 'Wallet Transfer',
      narration: 'Received money from CHUKWUNWEIKE BOLUM',
      balance: 6848.30,
      transactionType: 1
    },
    {
      amount: 1.00,
      date: '2021-03-21T21:13:12.877',
      reference: 'W254477',
      category: 'Wallet Transfer',
      narration: 'Received money from CHUKWUNWEIKE BOLUM',
      balance: 6847.30,
      transactionType: 1
    },
    {
      amount: 1.00,
      date: '2021-03-20T22:29:23.9',
      reference: 'J589789',
      category: 'Wallet Transfer',
      narration: 'Received money from CHUKWUNWEIKE BOLUM',
      balance: 6846.30,
      transactionType: 1
    }
  ]
};
