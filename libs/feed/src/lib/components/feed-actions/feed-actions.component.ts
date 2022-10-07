import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dsmn8-feed-actions',
  templateUrl: './feed-actions.component.html',
  styleUrls: ['./feed-actions.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FeedActionsComponent {
  @Input() likesButtonLabel: string | undefined;
  @Input() reshareButtonLabel: string | undefined;
}
