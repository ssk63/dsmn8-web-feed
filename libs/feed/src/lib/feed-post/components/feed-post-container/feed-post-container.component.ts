import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  FeedPostPartialState,
  getAllFeedPost,
  initFeedPost,
} from '../../+state';
import { FeedPostEntity } from '../../models';

@Component({
  selector: 'dsmn8-feed-post-container',
  templateUrl: './feed-post-container.component.html',
  styleUrls: ['./feed-post-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FeedPostContainerComponent implements OnInit {
  feedPosts$: Observable<FeedPostEntity[]> | undefined;

  constructor(private store: Store<FeedPostPartialState>) {}

  ngOnInit(): void {
    this.store.dispatch(initFeedPost());
    this.feedPosts$ = this.store.select(getAllFeedPost);
  }
}
