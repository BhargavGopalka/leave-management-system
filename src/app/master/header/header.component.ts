import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private routes: Router) {
  }

  ngOnInit() {
  }

  onLogOut() {
    sessionStorage.clear();
    this.routes.navigate(['login']);
  }

  onClick(linkUrl) {
    this.routes.navigate([linkUrl]);
  }

}
