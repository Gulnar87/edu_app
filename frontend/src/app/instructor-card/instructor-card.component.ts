
import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { RequestQuoteComponent } from '../request-quote/request-quote.component';

@Component({
  selector: 'app-instructor-card',
  templateUrl: './instructor-card.component.html',
  styleUrls: ['./instructor-card.component.css']
})
export class InstructorCardComponent implements OnInit {
  @Input() instructor: any;

  constructor(private router: Router, private modal: NzModalService,
    private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {


  }

  navigateToDetails() {
    this.router.navigate(['/instructor', this.instructor.id]);
  }

  createComponentModal(): void {
    const modal = this.modal.create({
      nzTitle: 'Request Quote',
      nzContent: RequestQuoteComponent,
    });
  }
}
