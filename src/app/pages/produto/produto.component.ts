import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from 'src/app/model/produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  produtos: Produto[] = [];
  novoProduto: Produto = new Produto();

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.listarTodos().subscribe(
      data => this.produtos = data,
      error => console.error('Erro ao carregar produtos:', error)
    );
  }

  deletarProduto(id: number): void {
    this.produtoService.deletar(id).subscribe(
      () => this.carregarProdutos(),
      error => console.error('Erro ao deletar produto:', error)
    );
  }

  cadastrarProduto(): void {
    console.log('Cadastrando produto:', this.novoProduto);
    this.produtoService.salvar(this.novoProduto).subscribe(
      () => {

        this.carregarProdutos();
        this.novoProduto = new Produto();
      },
      error => console.error('Erro ao cadastrar produto:', error)
    );
  }
}
