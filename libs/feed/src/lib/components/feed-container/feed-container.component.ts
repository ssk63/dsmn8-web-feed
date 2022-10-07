import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedEntity, likeBtnLabel, reshareBtnLabel } from '../../models';
import { FeedService } from '../../services';

@Component({
  selector: 'dsmn8-feed-container',
  templateUrl: './feed-container.component.html',
  styleUrls: ['./feed-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FeedContainerComponent implements OnInit {
  feeds$: Observable<FeedEntity[]> | undefined;
  likesBtnLabel: string = likeBtnLabel;
  reshareBtnLabel: string = reshareBtnLabel;

  constructor(private feedService: FeedService) {}

  ngOnInit(): void {
    this.feeds$ = this.feedService.getAllFeeds();
  }
}
