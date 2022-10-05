import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import {
  FeedPostEffects,
  feedPostReducer,
  FEED_POST_FEATURE_KEY,
} from '../../+state';
import { FeedPostService } from '../../services';
import { FeedPostActionsComponent } from '../feed-post-actions/feed-post-actions.component';
import { FeedPostBodyComponent } from '../feed-post-body/feed-post-body.component';
import { FeedPostFooterComponent } from '../feed-post-footer/feed-post-footer.component';
import { FeedPostHeaderComponent } from '../feed-post-header/feed-post-header.component';
import { FeedPostContainerComponent } from './feed-post-container.component';

export default {
  title: 'FeedPostContainerComponent',
  component: FeedPostContainerComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        FeedPostHeaderComponent,
        FeedPostBodyComponent,
        FeedPostActionsComponent,
        FeedPostFooterComponent,
      ],
      imports: [
        StoreModule.forRoot([]),
        EffectsModule.forRoot([]),
        StoreModule.forFeature(FEED_POST_FEATURE_KEY, feedPostReducer),
        EffectsModule.forFeature([FeedPostEffects]),
      ],
      providers: [FeedPostService],
    }),
  ],
} as Meta<FeedPostContainerComponent>;

const Template: Story<FeedPostContainerComponent> = (
  args: FeedPostContainerComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
