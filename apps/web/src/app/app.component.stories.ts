import { FeedModule } from '@dsmn8/feed';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { withDesign } from 'storybook-addon-designs';
import { GraphqlModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

export default {
  title: 'D8-Apps/Web/AppComponent',
  component: AppComponent,
  decorators: [
    withDesign,
    moduleMetadata({
      imports: [FeedModule, GraphqlModule, HttpClientModule],
    }),
  ],
} as Meta<AppComponent>;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  design: [
    {
      name: 'DSMN8',
      type: 'iframe',
      url: 'https://www.btw.so/marketing-tools/demand-generation/dsmn8',
      allowFullscreen: true,
    },
    {
      name: 'Youtube',
      type: 'iframe',
      url: 'https://www.youtube.com/embed/ewRrjkz5Vh8',
      allowFullscreen: true,
    },
  ],
};
