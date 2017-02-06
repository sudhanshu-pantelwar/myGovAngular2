import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import { GovtComponent }  from './components/govt.component';
import { AboutComponent }  from './components/about.component';
import { GetDataComponent }  from './components/getData.component';
import { routing } from './app.routing';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, routing ],
  declarations: [ AppComponent, AboutComponent, GovtComponent, GetDataComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
