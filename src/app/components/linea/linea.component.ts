import { Component, ViewChild } from '@angular/core';
import { Color, BaseChartDirective } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';


@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.css']
})
export class LineaComponent {
  
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [80, 80, 70, 90, 10, 70, 40], label: 'Series C'  }
  ];

  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public lineChartOptions: any = {
    responsive: true
  };

  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend: boolean = true;
  public lineChartType: string = "line";
  
  @ViewChild(BaseChartDirective, { static: true }) 
  chart: BaseChartDirective;


  public random(): void {
    this.lineChartData.forEach( ( x ) =>{
      
      for( let j = 0; j< x.data.length; j++ ){
        x.data[j] = this.generateNumber( j );
      }
    });
    this.chart.update();
  }

  private generateNumber(i: number): number {
    return Math.floor( ( Math.random() * ( i < 2 ? 100 : 1000 ) ) + 1 );
  }
  
  public chartClicked( e: any ): void {
    console.log( e );
  }

  public chartHovered( e: any ){
    console.log( e );
  }

  public pushOne() : void {
    this.lineChartData.forEach( (x, i) => {
      const num = this.generateNumber( i );
      const data: Number[] = x.data as Number[];
      data.push( num );
    } );
    
    this.lineChartLabels.push( `Label ${ this.lineChartLabels.length }` );
    
  }
}
