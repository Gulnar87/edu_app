import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-quote',
  templateUrl: './request-quote.component.html',
  styleUrls: ['./request-quote.component.css']
})
export class RequestQuoteComponent implements OnInit {
  public form: FormGroup;
  @Input() title?: string;
  @Input() subtitle?: string;

  // @Output() handleSubmit: EventEmitter<any> = new EventEmitter<any>();
  // @Output() handleClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      requestName: ['', [Validators.required]],
      coursePeriod: ['', [Validators.required]],
      numLearners: ['', [Validators.required]],
      delivery: ['', [Validators.required]],
      comment: ['', [Validators.required]],
    });
  }


  submitForm() {

  }
  handleOk(): void {
    console.log('Button ok clicked!');
    // this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    // this.isVisible = false;
  }









}
