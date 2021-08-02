import React from 'react';
import { render } from '@testing-library/react';

import Tag from './Tag.component';

describe('<Tag />', () => {
  test('Tag is rendered', async () => {
    const { getByRole } = await render(<Tag>Test</Tag>);
    const tag = getByRole('tag');
    expect(tag).toBeDefined();
  });
});
