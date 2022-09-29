import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProdutoCarrinho, IProduto } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() { }

  adicionarProduto(produto: IProduto, quantidade: number): void {
    const produtoCarrinho: IProdutoCarrinho = {...produto, quantidade: quantidade};
    this.itens.push(produtoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  obterCarrinho(): IProdutoCarrinho[] {
    return JSON.parse(localStorage.getItem("carrinho") || "[]");
  }

  obterNumeroDeItens() : number {
    if(localStorage.getItem("carrinho") === null) return 0;
    const carrinho: IProdutoCarrinho[] =  JSON.parse(localStorage.getItem("carrinho")!);
    return carrinho.length;
  }

  atualizarQuantidadeDoItem(carrinho: IProdutoCarrinho[]) {
    this.itens = carrinho;
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho(): void {
    this.itens = [];
    localStorage.clear();
  }

  removerDoCarrinho(id: number): void {
    this.itens = this.itens.filter(item => item.id !== id);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }
}
