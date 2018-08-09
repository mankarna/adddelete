import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
/*import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';*/
import { FormsModule,ReactiveFormsModule } from '@angular/forms';/*
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';*/
import { AppComponent } from './app.component';
import { TokenComponent } from './token/token.component';
import {TokenService} from './token.service';
import { TokenDisplayComponent } from './token-display/token-display.component';

import { CreateTokenComponent } from './create-token/create-token.component';


@NgModule({
  declarations: [
    AppComponent,
    TokenComponent,
    TokenDisplayComponent,
    CreateTokenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
