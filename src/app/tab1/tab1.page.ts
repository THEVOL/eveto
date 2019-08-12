import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  eventos: any;

  constructor(public router: Router, public eventoService: EventoService) {}

  ngOnInit(){
    this.eventos = this.eventoService.getAll();
  }

}
