import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {

  playlist: any[] = [
    {
      nome: "Funks",
      cartilhada: true,
      executando: false
    },
    {
      nome: "Pop e rock",
      cartilhada: true,
      executando: false
    },
    {
      nome: "Sambinha de domingo",
      cartilhada: true,
      executando: true
    },
    {
      nome: "Sambinha de domingo e churrasco com amigos tops",
      cartilhada: true,
      executando: false
    },
    {
      nome: "Fritando muito",
      cartilhada: true,
      executando: false
    },
    {
      nome: "I love funks",
      cartilhada: true,
      executando: false
    },
    {
      nome: "Sad days",
      cartilhada: true,
      executando: false
    },
    {
      nome: "Playlist de leitura ♥",
      cartilhada: true,
      executando: false
    },
  ];

  myOptions = {
    'placement': 'left',
    'showDelay': 20,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
