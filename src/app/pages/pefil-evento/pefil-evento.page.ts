import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pefil-evento',
  templateUrl: './pefil-evento.page.html',
  styleUrls: ['./pefil-evento.page.scss'],
})
export class PefilEventoPage implements OnInit {
  protected evento: any;
  private key: string;

  constructor(public eventoService: EventoService, public activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.key = this.activeRoute.snapshot.paramMap.get("key");
    this.evento = this.eventoService.get(this.key);
  }

}
