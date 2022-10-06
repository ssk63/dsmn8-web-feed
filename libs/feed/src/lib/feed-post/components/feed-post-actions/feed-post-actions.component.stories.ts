import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonComponent } from '@dsmn8/shared';
import { likeBtnLabel, reshareBtnLabel } from '../../models';
import { FeedPostActionsComponent } from './feed-post-actions.component';

export default {
  title: 'FeedPostActionsComponent',
  component: FeedPostActionsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      declarations: [ButtonComponent]
    }),
  ],
} as Meta<FeedPostActionsComponent>;

const Template: Story<FeedPostActionsComponent> = (
  args: FeedPostActionsComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  likesButtonLabel: likeBtnLabel,
  reshareButtonLabel: reshareBtnLabel,
};
