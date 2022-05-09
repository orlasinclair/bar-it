import { render, screen } from '@testing-library/react';
import { default as Home } from './index';

describe('Not Found', () => {
    beforeEach(() => render(<Home />))
    test('loads head with Not Found', () => {
        const Title = screen.queryByRole('heading');
        expect(Title.textContent).toContain('NotFound page')
    })



})
