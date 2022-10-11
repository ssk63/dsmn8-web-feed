import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { IFeed, likeBtnLabel, reshareBtnLabel } from '../../models';
import { FeedService } from '../../services';

@Component({
  selector: 'dsmn8-feed-container',
  templateUrl: './feed-container.component.html',
  styleUrls: ['./feed-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FeedContainerComponent implements OnInit {
  feeds$: Observable<IFeed[]> | undefined;

  constructor(private feedService: FeedService) {}

  ngOnInit(): void {
    this.feeds$ = this.feedService.getAllFeeds();
  }

  onLikesBtnClicked(feed: IFeed) {
    alert(`we are about to like ${feed.name}`);
  }

  onReshareBtnClicked(feed: IFeed) {
    alert(`we are about to share ${feed.name}`);
  }

  getShareBtnLabel(isShared: boolean): string {
    return isShared ? reshareBtnLabel : 'Share on LinkedIn (5 pts)';
  }

  getLikeBtnLabel(isLiked: boolean): string {
    return !isLiked ? likeBtnLabel : 'Liked';
  }
}
