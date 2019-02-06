import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Dashboard from './Dashboard';
import { toHaveTextContent, toHaveAttribute } from 'jest-dom';

expect.extend({ toHaveTextContent, toHaveAttribute });


describe('Controls', () => {
    it('cannot be closed or opened if it is locked', () => {
        const dashboard = render(<Dashboard/>);
        const openBtn = dashboard.getByTestId('openBtn');
        const lockBtn = dashboard.getByTestId('lockBtn');
        const openState = dashboard.getByTestId('openState');
        const lockedState = dashboard.getByTestId('lockedState');

        fireEvent.click(openBtn); // Open the gate so lock button is enabled
        fireEvent.click(lockBtn); // Lock the gate to test if open button is disabled
        expect(openBtn).toHaveAttribute('disabled');
    });
});