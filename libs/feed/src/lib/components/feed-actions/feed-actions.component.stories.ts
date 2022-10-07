import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonComponent } from '@dsmn8/shared';
import { likeBtnLabel, reshareBtnLabel } from '../../models';
import { FeedActionsComponent } from './feed-actions.component';

export default {
  title: 'FeedActionsComponent',
  component: FeedActionsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      declarations: [ButtonComponent]
    }),
  ],
} as Meta<FeedActionsComponent>;

const Template: Story<FeedActionsComponent> = (
  args: FeedActionsComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  likesButtonLabel: likeBtnLabel,
  reshareButtonLabel: reshareBtnLabel,
};
