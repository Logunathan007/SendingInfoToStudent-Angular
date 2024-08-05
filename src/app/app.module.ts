import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { MainService } from './services/main.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
