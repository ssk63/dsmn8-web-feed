import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedPostEntity, likeBtnLabel, reshareBtnLabel } from '../../models';
import { FeedPostService } from '../../services';

@Component({
  selector: 'dsmn8-feed-post-container',
  templateUrl: './feed-post-container.component.html',
  styleUrls: ['./feed-post-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FeedPostContainerComponent implements OnInit {
  feedPosts$: Observable<FeedPostEntity[]> | undefined;
  likesBtnLabel: string = likeBtnLabel;
  reshareBtnLabel: string = reshareBtnLabel;

  constructor(private feedPostService: FeedPostService) {}

  ngOnInit(): void {
    this.feedPosts$ = this.feedPostService.getFeedPosts();
  }
}
