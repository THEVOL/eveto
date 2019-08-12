import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { Evento } from 'src/app/model/evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.page.html',
  styleUrls: ['./add-evento.page.scss'],
})
export class AddEventoPage implements OnInit {

  public evento: Evento;
  public key: string;
  protected preview: any;



  constructor(public alertController: AlertController, public activeRoute: ActivatedRoute, public router: Router, public eventoService: EventoService, public camera: Camera) { }

  ngOnInit() {
    this.evento = new Evento;
    this.preview = null;
    this.key = this.activeRoute.snapshot.paramMap.get("key");
    if (this.key) {
      this.eventoService.get(this.key).subscribe(res => this.evento = res, err => this.key = null);
    }
  }

  onSubmit(form) {

    if (form.valid) {
      this.eventoService.save(this.evento)
        // tentar/então com dois resultados verdadeiro ou falso
        .then(
          res => {
            this.presentAlert("Aviso", "Cadastrado!");
            form.reset;
            this.router.navigate(['/']);
          },
          err => {
            this.presentAlert("Opa!", "Erro ao cadastrado!");
          }
        )

    }
  }


  async presentAlert(titulo: string, texto: string) {
    const alert = await this.alertController.create({
      header: titulo,
      //subHeader:'',
      message: texto,
      buttons: ['Talkey']
    });

    await alert.present();
  }
  tirarFoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
  
  this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    this.preview = base64Image;
  }, (err) => {
    // Handle error
  });
}
}
