import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { BannerComponent } from './banner/banner.component';
import { CadastramentoPetsComponent } from './cadastramento-pets/cadastramento-pets.component';
import { RodapeComponent } from './rodape/rodape.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CadastramentoPetsComponent,
    RodapeComponent,
    NavegacaoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot()
  ],
  exports: [
    NavegacaoComponent,
    BannerComponent,
    CadastramentoPetsComponent,
    RodapeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
