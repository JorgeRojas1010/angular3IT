import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

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
