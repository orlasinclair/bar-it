import { render, screen } from '@testing-library/react';
import { default as LoginPage } from './index';

describe('Login', () => {
    beforeEach(() => render(<LoginPage />))
    test('loads head with Login Page', () => {
        const Title = screen.queryAllByRole('heading');
        expect(Title[0].textContent).toContain('Log-in page')
    })



})