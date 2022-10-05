import React from 'react';

import Heading from '../../common/heading/Heading';
import Section from '../../common/section/Section';
import styles from './Context.module.scss';

export default function Context() {
  return (
    <body className={styles.body}>
      <Section>
        <Heading level={1}>Title</Heading>
        <Section>
          <Heading level={2}>Heading</Heading>
          <Heading level={2}>Heading</Heading>
          <Heading level={2}>Heading</Heading>
          <Section>
            <Heading level={3}>Sub-heading</Heading>
            <Heading level={3}>Sub-heading</Heading>
            <Heading level={3}>Sub-heading</Heading>
            <Section>
              <Heading level={4}>Sub-sub-heading</Heading>
              <Heading level={4}>Sub-sub-heading</Heading>
              <Heading level={4}>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </body>
  );
}
