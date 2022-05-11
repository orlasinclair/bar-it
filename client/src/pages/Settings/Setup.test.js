import { render, screen } from '@testing-library/react';
import { default as Home } from './index';

describe('Settings', () => {
    beforeEach(() => render(<Home />))
    test('loads head with settings page', () => {
        const Title = screen.queryByRole('heading');
        expect(Title.textContent).toContain('settings page')
    })



})
