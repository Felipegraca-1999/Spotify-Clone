import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  ativacaoEmbaralhamento: boolean = false;
  ativacaoRepeticao: boolean = false;
  ativacaoPausePlay: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }



  //ativando bolinhas de embaralhamento
  embaralhamento() {
    if (!this.ativacaoEmbaralhamento) {
      var element = document.getElementById('embaralhamento');
      element?.classList.add('bolinha');
    } else {
      var element = document.getElementById('embaralhamento');
      element?.classList.remove('bolinha');
    }
    this.ativacaoEmbaralhamento = !this.ativacaoEmbaralhamento;
  }

  //ativando bolinhas de repetição
  repeticao() {
    if (!this.ativacaoRepeticao) {
      var element = document.getElementById('repeticao');
      element?.classList.add('bolinha');
    } else {
      var element = document.getElementById('repeticao');
      element?.classList.remove('bolinha');
    }
    this.ativacaoRepeticao = !this.ativacaoRepeticao;
  }

  // Alterando icone de play e pause quando clicado
  pausePlay() {
    if (!this.ativacaoPausePlay) {
      var element1 = document.getElementById('pauseIcon');
      var element2 = document.getElementById('playIcon');

      element1?.classList.add('displayOff');
      element1?.classList.remove('displayOn');

      element2?.classList.add('displayOn');
      element2?.classList.remove('displayOff');

    } else {

      var element1 = document.getElementById('pauseIcon');
      var element2 = document.getElementById('playIcon');

      element1?.classList.add('displayOn');
      element1?.classList.remove('displayOff');

      element2?.classList.add('displayOff');
      element2?.classList.remove('displayOn');
    }
    this.ativacaoPausePlay = !this.ativacaoPausePlay;
  }

}
