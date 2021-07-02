import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-indicator',
  templateUrl: './app-indicator.component.html',
  styleUrls: ['./app-indicator.component.scss']
})
export class AppIndicatorComponent implements OnInit {

  public dataIndicator: any;

  constructor(
    private apiServise: ApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const routeOne = this.activatedRoute.snapshot.params.param;
    this.apiServise.getData(routeOne).subscribe(res => {
      this.dataIndicator = res;
    })
  }
}
