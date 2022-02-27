import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-request-quote',
  templateUrl: './request-quote.component.html',
  styleUrls: ['./request-quote.component.css']
})
export class RequestQuoteComponent implements OnInit {
  requestForm: FormGroup;

  constructor(private fb: FormBuilder, private modal: NzModalRef) {
  }

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      requestName: [null, [Validators.required]],
      coursePeriod: [null, [Validators.required]],
      numLearners: [null, [Validators.required]],
      delivery: [null, [Validators.required]],
      deliveryLocation: [null, []],
      comment: [null, []],
    });
  }


  submitForm(): void {
    if (this.requestForm.valid) {
      console.log('submit', this.requestForm.value);
      this.modal.close()
    } else {
      Object.values(this.requestForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }



  handleCancel(): void {
    this.modal.close()
  }





}
