import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-primary-nav',
  templateUrl: './primary-nav.component.html',
  styleUrls: [ './primary-nav.component.scss' ]
})
export class PrimaryNavComponent implements OnInit {

  title = 'Angular Portal';

  constructor() {
  }

  ngOnInit() {
  }

}
