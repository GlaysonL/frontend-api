import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoService } from './services/produto.service';

export const appRoutes: Routes = [{ path: '', component: AppComponent }];
export const routes = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
