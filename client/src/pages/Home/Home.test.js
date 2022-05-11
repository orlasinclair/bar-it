import { render, screen } from '@testing-library/react';
import { default as Home } from './index';

describe('Home', () => {
    beforeEach(() => render(<Home />))
    test('loads head with Home Page', () => {
        const Title = screen.queryByRole('heading');
        expect(Title.textContent).toContain('Home page')
    })



})
