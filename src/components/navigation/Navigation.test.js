import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Navigation from './Navigation';

test('If navigation does render', () => {

    const { getByText } = render(<Navigation />);
    fireEvent.click(getByText(/PROJECTS/i))
    // const home = getByText(/home/i);
    // expect(home).toBeInTheDocument();
})