import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedPostContainerComponent } from './components';

@NgModule({
  declarations: [FeedPostContainerComponent],
  imports: [CommonModule],
  exports: [FeedPostContainerComponent]
})
export class FeedPostModule {}
