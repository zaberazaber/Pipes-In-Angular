import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { HomeComponent } from './home/home.component';
import { EllipsisPipe } from './pipe/custom-pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    HomeComponent,
    EllipsisPipe,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
