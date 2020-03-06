import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { NavegationComponent } from './navegation/navegation.component';
import { BannerComponent } from './banner/banner.component';
import { CadastramentoPetsComponent } from './cadastramento-pets/cadastramento-pets.component';
import { RodapeComponent } from './rodape/rodape.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    BannerComponent,
    CadastramentoPetsComponent,
    RodapeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot()
  ],
  exports: [
    NavegationComponent,
    BannerComponent,
    CadastramentoPetsComponent,
    RodapeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
