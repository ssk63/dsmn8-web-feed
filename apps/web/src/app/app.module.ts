import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeedModule } from '@dsmn8/feed';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FeedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
