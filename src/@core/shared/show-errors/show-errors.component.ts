import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-show-errors',
  template: `
   <div *ngIf="shouldShowErrors()" style="display: 'inline-block';" class="invalid-feedback">
     <div *ngFor="let error of listOfErrors()">{{ error }}</div>
   </div>
 `,
})
export class ShowErrorsComponent {
  private errorMessages = {
    'required': () => 'Field Wajib Diisi',
    'minlength': (params: any) => `Panjang Karakter Minimal ${params.requiredLength}`,
    'maxlength': (params: any) => `Panjang Karakter Maksimal ${params.requiredLength}`,
    'number': () => 'Field Harus Berisi Number',
    'pattern': () => 'Kesalahan Bentuk Data yang diinput',
    'email': () => 'Bentuk Data Harus Email',
    'phone': () => 'Nomor Telepon tidak Valid',
    'equal': () => 'Isi Data Sama',
    'notEqual': () => 'Isi Data Tidak Sama',
    'ngbDate': () => 'Format Tanggal tidak Valid',
    'whitespace': () => 'Terdapat Kolom Yang Kosong',
    'url': () => 'Url Tidak Valid',
  };

  @Input()
   control!: AbstractControlDirective | AbstractControl;
  

  constructor() {
  }

  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched) || false;
  }

  listOfErrors(): string[] {
    if (!this.control.errors) {
      return [];
    }
  
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors![field]));
  }

  private getMessage(type: string, params: any) {
    const errorMessages: { [key: string]: (params: any) => string } = {
      required: () => 'This field is required.',
      minLength: (params: any) => `Minimum length should be ${params.requiredLength}.`,
    };
  
    const errorFunction = errorMessages[type];
    return errorFunction ? errorFunction(params) : 'Unknown error';
  }
}
