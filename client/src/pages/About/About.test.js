import { render, screen } from '@testing-library/react';
import { default as About } from './index';

describe('About', () => {
    beforeEach(() => render(<About />))
    test('loads head with About Page', () => {
        const Title = screen.queryByRole('heading');
        expect(Title.textContent).toContain('about page')
    })



})
