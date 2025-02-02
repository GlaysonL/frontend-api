import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Produto } from '../model/produto.model';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = 'http://localhost:8080/produtos';

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  buscarPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  buscarPorNome(nome: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}/nome/${nome}`).pipe(
      catchError(this.handleError)
    );
  }

  contarProdutos(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/contar`).pipe(
      catchError(this.handleError)
    );
  }

  salvar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto).pipe(
      catchError(this.handleError)
    );
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error.message);
    return throwError('Something bad happened; please try again later.');
  }
}
