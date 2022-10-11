import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
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
  imports: [
    CommonModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  exports: [FeedContainerComponent],
  providers: [FeedService],
})
export class FeedModule {}
