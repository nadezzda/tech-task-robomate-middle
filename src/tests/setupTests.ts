import '@testing-library/jest-dom';
import { TextEncoder } from 'util';
import { cleanup } from '@testing-library/react';

globalThis.scrollTo = jest.fn();

globalThis.window = Object.create(window);
globalThis.window.location = {
  ...window.location,
  href: 'http://localhost/',
};

globalThis.TextEncoder = TextEncoder;


afterEach(() => {
  cleanup();
});

jest.useFakeTimers();
