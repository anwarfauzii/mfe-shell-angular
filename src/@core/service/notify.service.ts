import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  private options = {
    positionClass: 'toast-top-right',
    progressBar: false,
    timeOut: 4000,
    tapToDismiss: true,
    closeButton: true
  }

  constructor(
    private toastr: ToastrService) {
    this.toastr.toastrConfig.preventDuplicates = true;
  }

  error(message: string, title: string = '') {
    this.toastr.error(message, title, this.options);
  }

  info(message: string, title: string = '') {
    this.toastr.info(message, title, this.options);
  }

  success(message: string, title: string = '') {
    this.options.timeOut = 4000;
    this.toastr.success(message, title, this.options);
  }

  warning(message: string, title: string = '') {
    this.toastr.warning(message, title, this.options);
  }
}
