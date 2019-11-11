import { Component } from '@angular/core';

@Component({
  selector: 'app-calcolatrice',
  templateUrl: './calcolatrice.component.html',
  styleUrls: ['./calcolatrice.component.css']
})
export class CalcolatriceComponent {
  espressione = "";
  risultato = "0";
  nValue = 0;


  //modifica l'espressione
  chEsp(valore:string){ 
    if(this.nValue == 0 && (valore == '*' || valore == '/')){
      
    } else {
      this.nValue++;
      this.espressione = this.espressione + valore;
    }
  }

  //CE
  cancella(){
    this.risultato = "0";
    this.espressione = "";
    this.nValue = 0;
  }

  //C
  cancellaC(){
    this.espressione = this.espressione.substring(0, this.espressione.length - 1);
  }

  //=
  calcola(){
    this.risultato = eval(this.espressione);
  }

  //Restisuisce l'ultimo carattere dell'espressione
  getLastChar(){
    return this.espressione.slice(-1);
  }
  



}