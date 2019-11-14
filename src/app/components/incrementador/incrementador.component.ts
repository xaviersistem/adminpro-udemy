import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-incrementador",
  templateUrl: "./incrementador.component.html",
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild("txtPorcentaje", { static: true }) txtPorcentaje: ElementRef;

  @Input() leyenda: string = "leyenda";
  @Input() porcentaje: number = 50;

  @Output() cambioValorOUT: EventEmitter<number> = new EventEmitter();
  constructor() {
    //console.log("leyenda", this.leyenda);
    //console.log("porcentaje", this.porcentaje);
  }

  ngOnInit() {
    //console.log("leyenda", this.leyenda);
    //console.log("porcentaje", this.porcentaje);
  }

  cambiarValor(valor: number) {
    this.porcentaje = this.porcentaje + valor;
    this.cambioValorOUT.emit(this.porcentaje);
  }

  OnChange(newValue: number) {
    //let elemHTM: any = document.getElementsByName("porcentaje")[0];

    //console.log(this.txtPorcentaje);
    if (newValue >= 100) {
      this.porcentaje = 100;
    } else if (newValue <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }

    //elemHTM.value = this.porcentaje;
    this.txtPorcentaje.nativeElement.value = this.porcentaje;
    //console.log("nueo" + newValue);
    this.cambioValorOUT.emit(this.porcentaje);
    this.txtPorcentaje.nativeElement.focus();
  }
}
