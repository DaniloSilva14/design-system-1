import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-source',
  templateUrl: './data-source.component.html',
  styleUrls: ['./data-source.component.scss']
})
export class DataSourceComponent implements OnInit {
  columnHead: string[] = ['Nome', 'Descrição', 'Opções'];
  dataSource = [
    {nome: 'Danilo1', descricao: 'teste1'},
    {nome: 'Danilo2', descricao: 'teste2'},
    {nome: 'Danilo3', descricao: 'teste3'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  evento1(){
    alert('Edit row')
  }

  evento2(){
    alert('Delete row')
  }
}
