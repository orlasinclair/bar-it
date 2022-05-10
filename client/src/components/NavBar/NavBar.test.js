import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { default as NavBar } from './index';



describe('BackButton', () => {
    beforeEach(() => {
        render(<NavBar />, { wrapper: MemoryRouter });
    })

    test('renders a Home button', () => {
        const btn = screen.getByRole('home-button')
        expect(btn.textContent).toContain('Home');
    })

    test('renders an about button', () => {
        const btn = screen.getByRole('about-button')
        expect(btn.textContent).toContain('about');
    })

    test('renders a settings button', () => {
        const btn = screen.getByRole('settings-button')
        expect(btn.textContent).toContain('settings');
    })

    test('renders a back button', () => {
        const btn = screen.getByRole('back-button')
        expect(btn.textContent).toContain('Back');
    })
})