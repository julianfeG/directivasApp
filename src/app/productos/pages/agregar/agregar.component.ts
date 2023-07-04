import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  color: string = 'orange';
  mensaje: string = 'Debe de ingresar este campo';

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  tieneError(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarNombre(): void {
    this.mensaje = Math.random().toString();
  }

  cambiarColor(): void {
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }

}
