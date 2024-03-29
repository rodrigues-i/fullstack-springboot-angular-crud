import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListProdutosComponent } from './components/list-produtos/list-produtos.component';
import { LoginComponent } from './components/login/login.component';
import { TableComponent } from './components/table/table.component';
import { AddProdutoComponent } from './components/add-produto/add-produto.component';
import { EditProdutoComponent } from './components/edit-produto/edit-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProdutosComponent,
    LoginComponent,
    TableComponent,
    AddProdutoComponent,
    EditProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
