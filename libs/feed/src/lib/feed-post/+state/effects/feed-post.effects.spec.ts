import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as FeedPostActions from '../actions/feed-post.actions';
import { FeedPostEffects } from './feed-post.effects';

describe('FeedPostEffects', () => {
  let actions: Observable<Action>;
  let effects: FeedPostEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        FeedPostEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(FeedPostEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: FeedPostActions.initFeedPost() });

      const expected = hot('-a-|', {
        a: FeedPostActions.loadFeedPostSuccess({ feedPost: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
