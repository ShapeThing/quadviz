import type { Meta, StoryObj } from '@storybook/react-vite';
import QuadViz from '.';
import { Parser } from 'n3'
import aaliyahTurtle from './test-support/aaliyah.ttl?raw';
import { ContextParser } from 'jsonld-context-parser';
const contextParser = new ContextParser();

const parser = new Parser()
const aaliyah = await parser.parse(aaliyahTurtle)
/** @ts-ignore */
const context = await contextParser.parse(parser._prefixes)

const meta = {
  title: 'QuadViz',
  component: QuadViz,
} satisfies Meta<typeof QuadViz>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    subject: aaliyah[0].subject,
    quads: aaliyah,
    context
  },
};

export const HighlightQuads: Story = {
  args: {
    subject: aaliyah[0].subject,
    quads: aaliyah,
    context,
    highlights: {
      quads: [aaliyah[3], aaliyah[11], aaliyah[9]],
    }
  },
};

export const HighlightTerm: Story = {
  args: {
    subject: aaliyah[0].subject,
    quads: aaliyah,
    context,
    highlights: {
      terms: [aaliyah[0].subject]
    }
  },
};
