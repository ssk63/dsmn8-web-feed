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
      declarations: [ButtonComponent],
    }),
  ],
  argTypes: {
    likesButtonLabel: {
      name: 'likesButtonLabel',
      description: 'Sets the like button text.',
      type: { name: 'string', required: true },
      control: {
        type: 'text',
      },
    },
    reshareButtonLabel: {
      name: 'reshareButtonLabel',
      description: 'Sets the reshare button text.',
      type: { name: 'string', required: true },
      control: {
        type: 'text',
      },
    },
    likesBtnClicked: {
      description: 'Event that is emitted when the like button is clicked.',
      action: 'likesBtnClicked',
    },
    reshareBtnClicked: {
      description: 'Event that is emitted when the reshare button is clicked.',
      action: 'reshareBtnClicked',
    },
  },
} as Meta<FeedActionsComponent>;

const Template: Story<FeedActionsComponent> = (args: FeedActionsComponent) => ({
  props: args,
});

export const FeedActions = Template.bind({});
FeedActions.args = {
  likesButtonLabel: likeBtnLabel,
  reshareButtonLabel: reshareBtnLabel,
};
