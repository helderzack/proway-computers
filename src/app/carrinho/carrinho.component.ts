import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { NotificacaoService } from '../notificacao.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  carrinho: IProdutoCarrinho[] = [];

  constructor(
    private carrinhoService: CarrinhoService, 
    private notificacaoService: NotificacaoService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.obterCarrinho();
  }

  obterCarrinho(): void {
    this.carrinho = this.carrinhoService.obterCarrinho();
  }

  somarPrecoDosItens(): number {
    return this.carrinho.map(item => item.preco * item.quantidade)
      .reduce((previous, current) => previous + current);
  }

  removerDoCarrinho(id: number) {
    this.carrinhoService.removerDoCarrinho(id);
    this.carrinho = this.carrinho.filter(item => item.id !== id);
  }

  limparCarrinho() {
    this.carrinhoService.limparCarrinho();
    this.carrinho = [];
  }

  atualizarQuantidadeDoItem(atualizado: IProdutoCarrinho) {
    const index = this.carrinho.findIndex(item => item.id === atualizado.id)
    this.carrinho[index] = atualizado;
    this.carrinhoService.atualizarQuantidadeDoItem(this.carrinho);
  }

  comprar() {
    this.notificacaoService.notificar("Parabéns: Você finalizou a sua compra!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(['produtos']);
  }

}
