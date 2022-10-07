import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dsmn8-feed-header',
  templateUrl: './feed-header.component.html',
  styleUrls: ['./feed-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FeedHeaderComponent {
  @Input() text: string | undefined;
}
