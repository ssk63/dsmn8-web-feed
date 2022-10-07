import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedService } from './services';
import { ButtonComponent } from '@dsmn8/shared';
import {
  FeedActionsComponent,
  FeedBodyComponent,
  FeedContainerComponent,
  FeedFooterComponent,
  FeedHeaderComponent,
} from './components';

@NgModule({
  declarations: [
    FeedContainerComponent,
    FeedHeaderComponent,
    FeedBodyComponent,
    FeedActionsComponent,
    FeedFooterComponent,
    ButtonComponent,
  ],
  imports: [CommonModule],
  exports: [FeedContainerComponent],
  providers: [FeedService],
})
export class FeedModule {}
