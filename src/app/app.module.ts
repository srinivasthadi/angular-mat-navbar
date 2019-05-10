import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule,
  MatInputModule, MatMenuModule, MatIconModule, MatToolbarModule,MatListModule, MatSidenavModule} from '@angular/material';
  import {FlexLayoutModule} from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, 
  MatMenuModule, MatIconModule, MatListModule, MatToolbarModule, FlexLayoutModule, MatSidenavModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
