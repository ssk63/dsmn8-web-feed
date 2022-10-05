import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FeedPostActionsComponent,
  FeedPostBodyComponent,
  FeedPostContainerComponent,
  FeedPostFooterComponent,
  FeedPostHeaderComponent,
} from './components';

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
})
export class FeedPostModule {}
