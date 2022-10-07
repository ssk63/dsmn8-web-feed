import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { mockFeed } from '../../models';
import { FeedBodyComponent } from './feed-body.component';

export default {
  title: 'FeedBodyComponent',
  component: FeedBodyComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<FeedBodyComponent>;

const Template: Story<FeedBodyComponent> = (
  args: FeedBodyComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  name: mockFeed[0].name,
  content: mockFeed[0].content,
  imgUrl: mockFeed[0].imgUrl,
};
