import type { Meta, StoryObj } from '@storybook/react-vite';
import Term from '.';
import factory from '@rdfjs/data-model';
import { ex, xsd } from '../../helpers/namespaces';

const meta = {
  title: 'Term',
  component: Term,
} satisfies Meta<typeof Term>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NamedNode: Story = {
  args: {
    term: ex('term'),
  },
};


export const FullNamedNode: Story = {
  args: {
    term: factory.namedNode('http://example.nl/term'),
  },
};

export const LiteralString: Story = {
  args: {
    term: factory.literal('Hello, world!'),
  },
};

export const LiteralDate: Story = {
  args: {
    term: factory.literal('2023-03-15', xsd('date')),
  },
};


export const BlankNode: Story = {
  args: {
    term: factory.blankNode(),
  },
};
