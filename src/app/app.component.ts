import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'project-collab';
  constructor(
    private _router: Router
  ) {}

  ngOnInit() {
  }

  navigate(){
this._router.navigate(['react'])
  }
}
