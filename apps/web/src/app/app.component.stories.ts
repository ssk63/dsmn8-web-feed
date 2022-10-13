import { FeedModule } from '@dsmn8/feed';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { GraphqlModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

export default {
  title: 'D8-Apps/Web/AppComponent',
  component: AppComponent,
  decorators: [
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
