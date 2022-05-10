import { render, screen } from '@testing-library/react';
import { default as SignUp } from './index';

describe('SignUp', () => {
    beforeEach(() => render(<SignUp />))
    test('loads head with Sign up page', () => {
        const Title = screen.queryAllByRole('heading');
        expect(Title[0].textContent).toContain('Sign up page')
    })



})