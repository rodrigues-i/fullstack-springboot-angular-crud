import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Produto } from '../models/produto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private url: string = "http://localhost:8081/server/produtos";
  constructor(private httpClient: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.url).pipe(
      map(response => response)
    )
  };
}