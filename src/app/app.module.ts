import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import {RouterModule} from '@angular/router';
import { appRoutes } from './routerConfig';
import {CoinService} from './coin.service';
import { TestcompComponent } from './testcomp/testcomp.component'

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    TestcompComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(appRoutes),ReactiveFormsModule, FormsModule
  ],
  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
