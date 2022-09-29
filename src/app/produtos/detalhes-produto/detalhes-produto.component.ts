import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { ProdutoService } from 'src/app/produto-service';
import { IProduto } from 'src/app/produtos';


@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto!: IProduto;
  quantidade = 1;

  constructor(
    private route: ActivatedRoute, 
    private produtoService: ProdutoService,
    private router: Router,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    this.getProduto();
  }

  getProduto() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produtoService.getProduto(id)
      .subscribe((produto) => {
        if(produto === undefined) {
          this.router.navigate(['**']);
          return;
        } else {
          this.produto = produto; 
        }
      });
  }

  adicionarAoCarrinho() {
    this.carrinhoService.adicionarProduto(this.produto, this.quantidade);
    this.notificacaoService.notificar('Produto adicionado ao carrinho');
  }

}
