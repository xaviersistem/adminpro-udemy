import { Component, OnInit, Input } from "@angular/core";
import { ChartsModule } from "ng2-charts";

@Component({
  selector: "app-grafico-dona",
  templateUrl: "./grafico-dona.component.html",
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  @Input() titulo: string = "";
  // Doughnut

  @Input() doughnutChartLabels: string;
  @Input() doughnutChartData: number[];
  @Input() doughnutChartType: string;

  constructor() {}

  ngOnInit() {}
}
