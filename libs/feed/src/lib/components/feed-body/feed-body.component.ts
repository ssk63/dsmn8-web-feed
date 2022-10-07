import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dsmn8-feed-body',
  templateUrl: './feed-body.component.html',
  styleUrls: ['./feed-body.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FeedBodyComponent {
  @Input() name: string | undefined;
  @Input() content: string | undefined;
  @Input() imgUrl: string | undefined;
}
