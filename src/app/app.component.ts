import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  hideHeader: boolean;
  constructor(private route: Router) {
    this.hideHeader = false;
  }

  ngOnInit(): void {
    this.route.events.subscribe(res => {
      if(res instanceof NavigationEnd) {
        const url = res.urlAfterRedirects;
        this.hideHeader = (url !== '/') ? false : true;
      }
    })
  }
}
