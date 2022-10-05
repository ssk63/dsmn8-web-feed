import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  FeedPostActionsComponent,
  FeedPostBodyComponent,
  FeedPostContainerComponent,
  FeedPostFooterComponent,
  FeedPostHeaderComponent,
} from './components';
import { FeedPostService } from './services';
import {
  FeedPostEffects,
  feedPostReducer,
  FEED_POST_FEATURE_KEY,
} from './+state';

@NgModule({
  declarations: [
    FeedPostContainerComponent,
    FeedPostHeaderComponent,
    FeedPostBodyComponent,
    FeedPostActionsComponent,
    FeedPostFooterComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(FEED_POST_FEATURE_KEY, feedPostReducer),
    EffectsModule.forFeature([FeedPostEffects]),
  ],
  exports: [FeedPostContainerComponent],
  providers: [FeedPostService],
})
export class FeedPostModule {}
