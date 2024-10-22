import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
//Modelo de datos
import { Productos } from '../modeldatosproductos'
//Servicios

@Component({
  selector: 'app-productos-crud',
  templateUrl: './productos-crud.component.html',
  styleUrls: ['./productos-crud.component.scss']
})
export class ProductosCrudComponent implements OnInit {
  //Entradas de componente
  @Input() public active: boolean = false;
  public editForm: FormGroup = this.formBuilder.group({});
  @Input() public isNew: boolean | undefined = undefined;
  @Input() public set model(producto: Productos) {
    //Adiciona controles especiales

    console.log('es nuevo', this.isNew);
    if (producto != undefined) {
      if (this.isNew) {
        
      } else {
        //Deshabilita la llave de este formulario
        this.editForm.controls.code.disable({ onlySelf: true });
      }
      this.editForm.reset(producto);
      console.log('Set model Complete')
    }
  }
  //Events Emitters de Componente
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<Productos> = new EventEmitter();
  //Variables

  //Variable Datos Tabla

  constructor(private formBuilder: FormBuilder
  ) {
    this.editForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      sale_value: [0, Validators.required],
      manages_iva: [false],
      iva_percentage: [0]
    });
  }

  ngOnInit(): void {

  }

  public onSave(e: any): void {
    e.preventDefault();
    console.log('onsave', e, this.editForm.value);
    this.save.emit(this.editForm.value);
    // this.active = false;
  }

  public onCancel(e: any): void {
    e.preventDefault();
    this.closeForm();
  }

  private closeForm(): void {
    //Restablecer variables
    this.active = false;
    this.editForm.controls.code.enable({ onlySelf: true });
    this.cancel.emit();
  }

}
