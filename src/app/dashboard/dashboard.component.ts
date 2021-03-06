import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit{

  page = 1;
  pageSize = 0;
  transactions = TRANSACTIONS.allTransactions;
  totalTransactions = TRANSACTIONS.allTransactions;
  @ViewChild('longContent')
  private longContent!: TemplateRef<any>;

  constructor(private modalService: NgbModal) {
    this.loadMoreTransactions();
  }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.openLg(this.longContent);
  }

  // tslint:disable-next-line:typedef
  openLg(content: any) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  // tslint:disable-next-line:typedef
  loadMoreTransactions(pageSize = 5){
    this.pageSize += pageSize;
    this.transactions = TRANSACTIONS.allTransactions
      .map((transaction, i) => ({id: i + 1, ...transaction}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  /*
  * Assuming TransactionType values
  * 1 => Credit
  * 2 => Debit
  * */

  // tslint:disable-next-line:typedef
  getTotalAmountSpent() {
    let totalAmount = 0;
    this.totalTransactions.forEach(transaction => {
      if (transaction.transactionType === 2) {
        totalAmount += transaction.amount;
      }
    });
    return totalAmount;
  }

  // tslint:disable-next-line:typedef
  getTotalAmountReceived() {
    let totalAmount = 0;
    this.totalTransactions.forEach(transaction => {
      if (transaction.transactionType === 1) {
        totalAmount += transaction.amount;
      }
    });
    return totalAmount;
  }
  // tslint:disable-next-line:typedef
  getTotalBalance() {
    let totalCreditBalance = 0;
    let totalDebitBalance = 0;
    this.totalTransactions.forEach(transaction => {
      if (transaction.transactionType === 1){
        totalCreditBalance += transaction.balance;
      }
      else {
        totalDebitBalance += transaction.balance;
      }
    });

    return totalCreditBalance - totalDebitBalance;
  }
}

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
