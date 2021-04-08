import {Inject, Component, OnInit, AfterViewInit, ElementRef} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(private modalService: NgbModal, private elRef: ElementRef) {}
  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  openLg(content: any) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  ngAfterViewInit(): void {
    /*const div = this.elRef.nativeElement.querySelector('ng-template');
    this.openLg(div);*/
  }

}

