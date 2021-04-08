import {Inject, Component, OnInit, AfterViewInit, ElementRef, TemplateRef, Input, AfterViewChecked} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit, AfterViewChecked{
  constructor(private modalService: NgbModal, private elRef: ElementRef) {}
  @Input() longContent!: TemplateRef<any>;
  ngAfterViewChecked(): void {
        // throw new Error('Method not implemented.');
    this.openLg(this.longContent);
  }
  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  openLg(content: any) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  ngAfterViewInit(): void {

  }
}

