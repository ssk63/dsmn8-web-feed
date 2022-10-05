import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dsmn8-feed-post-body',
  templateUrl: './feed-post-body.component.html',
  styleUrls: ['./feed-post-body.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FeedPostBodyComponent {
  @Input() name: string | undefined;
  @Input() content: string | undefined;
  @Input() imgUrl: string | undefined;
}
