import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProdutoComponent } from './components/add-produto/add-produto.component';
import { EditProdutoComponent } from './components/edit-produto/edit-produto.component';
import { ListProdutosComponent } from './components/list-produtos/list-produtos.component';
import { LoginComponent } from './components/login/login.component';
import { MovimentacoesComponent } from './components/movimentacoes/movimentacoes.component';
import { TableComponent } from './components/table/table.component';


const routes: Routes = [
  {path: 'produtos', component: ListProdutosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'table', component: TableComponent},
  {path: 'add-produto', component: AddProdutoComponent},
  {path: 'produtos/:id', component: EditProdutoComponent},
  {path: 'movimentacoes', component: MovimentacoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
