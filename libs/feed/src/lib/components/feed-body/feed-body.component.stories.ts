import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { mockFeed } from '../../models';
import { FeedBodyComponent } from './feed-body.component';

export default {
  title: 'Pages/Feed/FeedBodyComponent',
  component: FeedBodyComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  argTypes: {
    name: {
      name: 'name',
      description: 'Sets the feed post title.',
      control: {
        type: 'text',
      },
      table: {
        category: 'Inputs',
      },
    },
    content: {
      name: 'content',
      description: 'Sets the feed post text.',
      control: {
        type: 'text',
      },
      table: {
        category: 'Inputs',
      },
    },
    imgUrl: {
      name: 'imgUrl',
      description: 'Sets the feed post image.',
      control: {
        type: 'text',
      },
      table: {
        category: 'Inputs',
      },
    },
    videoUrl: {
      name: 'videoUrl',
      description: 'Sets the feed post video.',
      control: {
        type: 'text',
      },
      table: {
        category: 'Inputs',
      },
    },
  },
  parameters: {
    jest: 'feed-body.component',
  }
} as Meta<FeedBodyComponent>;

const Template: Story<FeedBodyComponent> = (args: FeedBodyComponent) => ({
  props: args,
});

export const FeedTitle = Template.bind({});
FeedTitle.args = {
  name: mockFeed[0].name,
};

export const FeedContent = Template.bind({});
FeedContent.args = {
  content: mockFeed[0].content,
};

export const FeedImage = Template.bind({});
FeedImage.args = {
  imgUrl: mockFeed[0].imgUrl,
};

export const FeedVideo = Template.bind({});
FeedVideo.args = {
  videoUrl: mockFeed[3].videoUrl,
};
