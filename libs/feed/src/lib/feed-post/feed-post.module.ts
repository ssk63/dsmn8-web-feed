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
import { ButtonComponent } from '@dsmn8/shared';

@NgModule({
  declarations: [
    FeedPostContainerComponent,
    FeedPostHeaderComponent,
    FeedPostBodyComponent,
    FeedPostActionsComponent,
    FeedPostFooterComponent,
    ButtonComponent
  ],
  imports: [CommonModule],
  exports: [FeedPostContainerComponent],
  providers: [FeedPostService],
})
export class FeedPostModule {}
