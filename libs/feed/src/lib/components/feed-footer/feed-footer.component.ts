import { Component, Input, ViewEncapsulation } from '@angular/core';
import { IMetrics } from '../../models';

@Component({
  selector: 'dsmn8-feed-footer',
  templateUrl: './feed-footer.component.html',
  styleUrls: ['./feed-footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FeedFooterComponent {
  @Input() metrics: IMetrics | undefined;
}
