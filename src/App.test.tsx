import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('app title should be "Portfolio | Home" ', async () => {
    await render(<App />)
    expect(document.title).toEqual("Portfolio | Home")
});