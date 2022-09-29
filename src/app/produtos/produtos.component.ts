import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, forkJoin, Observable } from 'rxjs';
import { ProdutoService } from '../produto-service';
import { IProduto } from '../produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos!: IProduto[];

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    combineLatest([
      this.produtoService.getProdutos(),
      this.route.queryParamMap
    ]).subscribe(data => {
      const received = data[0];
      const descricao = data[1].get('descricao')?.toLowerCase()
      if(descricao) {
        this.produtos = received.filter(produto => produto.descricao.toLowerCase().includes(descricao));
        return;
      }
      this.produtos = received;
    });
  }
  
}
