import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeedModule } from '@dsmn8/feed';
import { GraphqlModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FeedModule, GraphqlModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
