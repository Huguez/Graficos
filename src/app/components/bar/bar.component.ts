import { Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
  
  public barChartOptions: any = {
    scaleShowVerticalLines:false,
    responsive:true
  };
  
  public barChartLabels: string[] = ["2006", "2007", "2008", "2009", "2010", "2011", "2012"];

  public barChartType:string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[]=[
    {data: [12, 23, 34, 45, 56, 76, 87, 98, 90], label: 'barra 1' },
    {data: [9, 87, 78, 67, 65, 54, 45, 34, 32], label: 'barra 2' }
  ];
  
  public random():void {
    // Only Change 3 values
    const data = [
    Math.round( Math.random() * 100), 59, 80, (Math.random() * 100), 56, (Math.random() * 100), 40];

    this.barChartData[0].data = data;
  }

}
