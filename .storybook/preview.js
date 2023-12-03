
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

export default {
  decorators: [
    (Story) => (
      <Theme>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> 
          with Story() to enable it  */}
        <Story />
      </Theme>
    ),
  ],
};