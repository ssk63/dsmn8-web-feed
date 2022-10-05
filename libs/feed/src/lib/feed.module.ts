import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedPostModule } from './feed-post';

@NgModule({
  imports: [CommonModule, FeedPostModule],
  exports: [FeedPostModule]
})
export class FeedModule {}
