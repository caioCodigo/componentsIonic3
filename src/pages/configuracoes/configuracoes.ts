import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { SobrePage } from '../sobre/sobre';

/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  rootPage = PerfilPage;

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracoesPage');
  } 
  
  abrirPerfil(){
    
    this.navCtrl.push(PerfilPage);
  }
  abrirSobre(){
    this.navCtrl.push(SobrePage);
  }

}