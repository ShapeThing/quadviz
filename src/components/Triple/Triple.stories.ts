import type { Meta, StoryObj } from '@storybook/react-vite';
import Triple from '.';
import factory from '@rdfjs/data-model';
import { ex, schema, xsd } from '../../helpers/namespaces';

const meta = {
  title: 'Triple',
  component: Triple,
} satisfies Meta<typeof Triple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NamedNodes: Story = {
  args: {
    quad: factory.quad(
      ex('subject'),
      ex('predicate'),
      ex('object')
    ),
  },
};

export const WithLiteral: Story = {
  args: {
    quad: factory.quad(
      ex('subject'),
      ex('predicate'),
      factory.literal('object', xsd('string'))
    ),
  },
};

export const WithSubjectBlankNode: Story = {
  args: {
    quad: factory.quad(
      factory.blankNode(),
      ex('predicate'),
      factory.literal('object', xsd('string'))
    ),
  },
};

export const WithObjectBlankNode: Story = {
  args: {
    quad: factory.quad(
      ex('subject'),
      ex('predicate'),
      factory.blankNode()
    ),
  },
};

export const John: Story = {
  args: {
    quad: factory.quad(
      ex('john-doe'),
      schema('givenName'),
      factory.literal('John', 'en')
    ),
  },
};

export const JohnBirthDay: Story = {
  args: {
    quad: factory.quad(
      ex('john-doe'),
      schema('birthDate'),
      factory.literal('1990-01-01', xsd('date'))
    ),
  },
};