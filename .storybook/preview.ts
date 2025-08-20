import type { Preview } from '@storybook/react-vite'
import '../src/components/QuadViz/quad-viz.css'
import '../src/components/Triple/triple.css'
import '../src/components/Term/term.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;