import { render, screen } from '@testing-library/react';
import { default as LoginPage } from './index';

describe('Previous', () => {
    beforeEach(() => render(<LoginPage />))
    test('loads head with Previous Page', () => {
        const Title = screen.queryByRole('heading');
        expect(Title.textContent).toContain('previous search page')
    })



})