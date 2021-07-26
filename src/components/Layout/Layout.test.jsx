import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout.component';

describe('Test Layout', () => {
    it('should render layout', () => {
        const { container } = render(
            <Layout></Layout>
        )
        expect(screen.getAllByRole('main')).toBeDefined();
    });
});