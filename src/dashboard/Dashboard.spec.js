import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Dashboard from './Dashboard';
import { toHaveTextContent, toHaveAttribute } from 'jest-dom';

expect.extend({ toHaveTextContent, toHaveAttribute });


describe('Dashboard', () => {
    it('cannot be closed or opened if it is locked and should display proper text content', () => {
        const dashboard = render(<Dashboard/>);
        const openBtn = dashboard.getByTestId('openBtn');
        const lockBtn = dashboard.getByTestId('lockBtn');
        const openState = dashboard.getByTestId('openState');
        const lockedState = dashboard.getByTestId('lockedState');

        fireEvent.click(openBtn); // Open the gate so lock button is enabled
        expect(openState).toHaveTextContent(/closed/i);
        fireEvent.click(lockBtn); // Lock the gate to test if open button is disabled
        expect(lockedState).toHaveTextContent(/locked/i);
        expect(openBtn).toHaveAttribute('disabled');
        fireEvent.click(lockBtn);
        expect(lockedState).toHaveTextContent(/unlocked/i);
        fireEvent.click(openBtn);
        expect(openState).toHaveTextContent(/open/i);
    });
});