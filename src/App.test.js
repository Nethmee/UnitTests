import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import {isTsAnyKeyword } from '@babel/types';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it("App renders without crashing",()=>{
  const div = document.createElement('div');
  ReactDOM.render(<App></App>,div)
})