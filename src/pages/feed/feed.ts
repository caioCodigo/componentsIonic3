import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public usuario:string = "Caio C.T.M ";
  public loader;
  public refresher;
  public isRefreshing:boolean = false;
  public listaFilmes = new Array<any>();
  public page = 1;
  public infiteScroll;
  constructor(public navCtrl: NavController, public navParams: NavParams, public moovieProvider:MoovieProvider, public loadingCtrl:LoadingController) {
  }

  public somar():number{
    return 0;
  }

  ionViewDidEnter() {
    this.carregarFeed();
  }


  carregarRefresher(){
    this.loader = this.loadingCtrl.create({
      content:"carregando"
    });
    this.loader.present(); 
   }

   fecharCarregar(){
     this.loader.dismiss();
   }

   doRefresh(refresher) {

    this.refresher = refresher;
    this.isRefreshing = true;

    this.carregarFeed();

  }
  doInfinite(infiniteScroll) {
    this.page++;
    this.infiteScroll =  infiniteScroll;
    this.carregarFeed(true);
    infiniteScroll.complete(); 
  }



  carregarFeed(newPage:boolean = false){
    this.carregarRefresher();
    this.moovieProvider.getMovies(this.page).subscribe(
      data => {
        //pega os dados de resposta e o transforma em objeto de qualquer tipo(por causa do _body)
        const response = (data as any);
        // converte a resposta que é pega em json, porem é convertida pra string, entao convertemos pra json dnv
        const objectResponse = JSON.parse(response._body);
        if(newPage){

        this.listaFilmes =  this.listaFilmes.concat(objectResponse.results);
        this.infiteScroll.complete();

        }else{
          this.listaFilmes = objectResponse.results;

        }
        console.log(objectResponse);
        this.fecharCarregar();

        if(this.isRefreshing){
          this.refresher.complete();
        }
      }, error=> {
        console.log(error);
        this.fecharCarregar();

        if(this.isRefreshing){
          this.refresher.complete();
        }
      }
    );
  }


  abrirDetalhes(filme){
    this.navCtrl.push(FilmeDetalhesPage,{id: filme.id});
  }


}
