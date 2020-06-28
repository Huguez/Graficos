import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  @Input()
  public tipoGrafica: string = "dona";



  public linea():void {
    this.tipoGrafica = "linea";
  }

  public pay(): void {
    this.tipoGrafica = "pay";
  }

  // bar dona radar

  public dona():void {
    this.tipoGrafica = "dona";
  }

  public radar():void {
    this.tipoGrafica = "radar";
  }

  public barra():void{
    this.tipoGrafica = "bar";
  }
}
