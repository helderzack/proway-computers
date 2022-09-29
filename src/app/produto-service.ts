import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduto, PRODUTOS } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  getProdutos(): Observable<IProduto[]> {
    const produtos = of(PRODUTOS);
    return produtos; 
  }

  getProduto(id: number): Observable<IProduto> {
    const produto = of(PRODUTOS.find(produto => produto.id === id)!);
    return produto;
  }
}
