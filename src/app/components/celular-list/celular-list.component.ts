import { Component, OnInit } from '@angular/core';
import { CelularService } from '../../services/celular.service';
import { Celular } from '../../models/celular.model';

@Component({
  selector: 'app-celular-list',
  templateUrl: './celular-list.component.html',
  styleUrls: ['./celular-list.component.css']
})
export class CelularListComponent implements OnInit {
  celulares: Celular[] = [];

  constructor(private celularService: CelularService) { }

  ngOnInit(): void {
    this.celularService.getAll().subscribe((data: Celular[]) => {
      this.celulares = data;
    });
  }
}