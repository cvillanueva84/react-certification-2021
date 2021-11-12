import React from 'react';
import { render } from '@testing-library/react'

import ContentComponent from '../Content.component';

describe('Content Component', () => {
    it('Should show ContentComponent', () => {
      const container = render(<ContentComponent />)
     
      expect(container.firstChild).toMatchSnapshot()
    });
});