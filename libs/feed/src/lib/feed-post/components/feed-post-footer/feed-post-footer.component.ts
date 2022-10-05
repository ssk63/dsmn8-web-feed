import { Component, Input, ViewEncapsulation } from '@angular/core';
import { IMetrics } from '../../models';

@Component({
  selector: 'dsmn8-feed-post-footer',
  templateUrl: './feed-post-footer.component.html',
  styleUrls: ['./feed-post-footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FeedPostFooterComponent {
  @Input() metrics: IMetrics | undefined;
}
