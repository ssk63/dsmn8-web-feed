// import { Action } from '@ngrx/store';
// import { FeedPostEntity } from '../../models';
// import * as FeedPostActions from '../actions/feed-post.actions';
// import {
//   FeedPostState,
//   initialFeedPostState,
//   feedPostReducer,
// } from './feed-post.reducer';

// describe('FeedPost Reducer', () => {
//   const createFeedPostEntity = (id: string, name = ''): FeedPostEntity => ({
//     id,
//     name: name || `name-${id}`,
//   });

//   describe('valid FeedPost actions', () => {
//     it('loadFeedPostSuccess should return the list of known FeedPost', () => {
//       const feedPost = [
//         createFeedPostEntity('PRODUCT-AAA'),
//         createFeedPostEntity('PRODUCT-zzz'),
//       ];
//       const action = FeedPostActions.loadFeedPostSuccess({ feedPost });

//       const result: FeedPostState = feedPostReducer(
//         initialFeedPostState,
//         action
//       );

//       expect(result.loaded).toBe(true);
//       expect(result.ids.length).toBe(2);
//     });
//   });

//   describe('unknown action', () => {
//     it('should return the previous state', () => {
//       const action = {} as Action;

//       const result = feedPostReducer(initialFeedPostState, action);

//       expect(result).toBe(initialFeedPostState);
//     });
//   });
// });
