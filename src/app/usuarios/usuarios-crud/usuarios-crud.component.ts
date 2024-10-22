import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
//Modelo de datos
import { Usuarios } from '../modeldatosusuarios'
//Servicios

@Component({
  selector: 'app-usuarios-crud',
  templateUrl: './usuarios-crud.component.html',
  styleUrls: ['./usuarios-crud.component.scss']
})
export class UsuariosCrudComponent implements OnInit {
  //Entradas de componente
  @Input() public active: boolean = false;
  public editForm: FormGroup = this.formBuilder.group({});
  @Input() public isNew: boolean | undefined = undefined;
  @Input() public set model(usuario: Usuarios) {
    //Adiciona controles especiales

    console.log('es nuevo', this.isNew);
    if (usuario != undefined) {
      if (this.isNew) {
        this.editForm.controls.password.addValidators(Validators.required);
      } else {
        //Deshabilita la llave de este formulario
        this.editForm.controls.cedula.disable({ onlySelf: true });
        this.editForm.controls.email.disable({ onlySelf: true });
      }
      this.editForm.reset(usuario);
      console.log('Set model Complete')
    }
  }
  //Events Emitters de Componente
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<Usuarios> = new EventEmitter();
  //Variables

  //Variable Datos Tabla

  constructor(private formBuilder: FormBuilder
  ) {
    this.editForm = this.formBuilder.group({
      id: [0],
      cedula: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      is_admin: [false],
      is_active: [false],
    });
  }

  ngOnInit(): void {

  }

  public onSave(e: any): void {
    e.preventDefault();
    console.log('onsave', e, this.editForm.value);
    this.save.emit(this.editForm.getRawValue());
    // this.active = false;
  }

  public onCancel(e: any): void {
    e.preventDefault();
    this.closeForm();
  }

  private closeForm(): void {
    //Restablecer variables
    this.active = false;
    this.editForm.controls.cedula.enable({ onlySelf: true });
    this.editForm.controls.email.enable({ onlySelf: true });
    this.editForm.controls.password.clearValidators();
    this.editForm.updateValueAndValidity();
    this.cancel.emit();
  }

}
