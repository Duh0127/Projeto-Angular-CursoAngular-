import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = "Curso de Angular";
  //nome     tipo     nome da inicialização
  anuncio: string = `O ${this.nomeProduto} está em promoção`; // frase com cráse no lugar das aspas
  idProduto: number = 123;
  precoProduto: number = 2.59;
  promocao: boolean = true;


  constructor() {
    // váriaveis de string com concatenação
    //this.anuncio = 'O' + this.nomeProduto + 'está em promoção!';

    console.log('Nome do Produto: ', this.nomeProduto);
    //               nome do item        seleção do item
    console.log('Anuncio: ', this.anuncio);
    console.log('ID: ', this.idProduto);
    console.log('Preço: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);

    /* var idade = 10;
    console.log('Minha idade: ', idade);

    //var deixa alterar a mesma váriavel, mas o let e o const não

    let idade = 10;
    console.log('Minha idade: ', idade);*/

    let idade = 10;
    function imprimeIdade(){
      for (var idade = 30; idade <=40; idade++) {
        console.log('Minha idade dentro do for: ', idade);
      }
      console.log('Minha idade fora do for: ', idade);
    }
    imprimeIdade();
    //LET é mais utilizado no TypeScript
    //Let é uma variavel de definição unica, e não sequencial como as variaveis normais

    const var2 = 1; //'CONST' precisa iniciar ela atribuindo um valor
    var variavel1;


  }

  ngOnInit(): void {
  }

}
