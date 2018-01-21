import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class ToastService {

  constructor(private toastr: ToastrService) { }

  success(text) {
    this.toastr.success(text);
  }

  error(text) {
    this.toastr.error(text);
  }

}
