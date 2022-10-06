import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FeedPostActionsComponent,
  FeedPostBodyComponent,
  FeedPostContainerComponent,
  FeedPostFooterComponent,
  FeedPostHeaderComponent,
} from './components';
import { FeedPostService } from './services';

@NgModule({
  declarations: [
    FeedPostContainerComponent,
    FeedPostHeaderComponent,
    FeedPostBodyComponent,
    FeedPostActionsComponent,
    FeedPostFooterComponent,
  ],
  imports: [CommonModule],
  exports: [FeedPostContainerComponent],
  providers: [FeedPostService],
})
export class FeedPostModule {}
