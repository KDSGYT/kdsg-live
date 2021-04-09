import React from 'react';
import {render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup)

it('should take a screenshot', () => {
    const {asFragment} = render(<App/>);
    expect(asFragment()).toMatchSnapshot()
})