import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dsmn8-feed-post-header',
  templateUrl: './feed-post-header.component.html',
  styleUrls: ['./feed-post-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FeedPostHeaderComponent {
  @Input() text: string | undefined;
}
