import React from 'react';
import { render } from '@testing-library/react';

import Navigation from './Navigation';

test('If navigation does render', () => {

    const { getByText } = render(<Navigation />);
    const home = getByText(/home/i);
    expect(home).toBeInTheDocument();
})