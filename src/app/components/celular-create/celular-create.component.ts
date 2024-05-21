// src/app/components/celular-create/celular-create.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CelularService } from '../../services/celular.service';
import { Celular } from '../../models/celular.model';

@Component({
  selector: 'app-celular-create',
  templateUrl: './celular-create.component.html',
  styleUrls: ['./celular-create.component.css']
})
export class CelularCreateComponent {
  celularForm: FormGroup;

  constructor(private fb: FormBuilder, private celularService: CelularService) {
    this.celularForm = this.fb.group({
      marca: ['', Validators.required],
      serial: ['', Validators.required],
      fechaCompra: ['', Validators.required],
      anioLanzamiento: ['', Validators.required],
      precio: ['', Validators.required],
      sistemaOperativo: ['', Validators.required],
      gama: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.celularForm.valid) {
      const newCelular = this.celularForm.value as Celular;
      this.celularService.createCelular(newCelular).subscribe();
    }
  }
}
