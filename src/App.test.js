import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import {isTsAnyKeyword } from '@babel/types';
import App from './App';
import {getPackageById} from './components/inventory';
import {getPackagesByProductId} from './components/inventory';
import {add} from './components/inventory'



/* test ('add', ()=>{
  const value = add(1,2)
  expect(value).toBe(3)
}) */
test ('getPackageById', ()=>{
  const value = getPackageById(1)
  expect(value).toEqual([{"packageId": 1, "price": 15, "productId": 100, "qty": 1}])
})

test ('getPackagesByProductId', ()=>{
  const value = getPackagesByProductId(200)
  expect(value).toEqual([{ packageId: 4, productId: 200, qty:1, price: 15 },
    { packageId: 5, productId: 200, qty:5, price: 60 },
    { packageId: 6, productId: 200, qty:10, price: 100}])
})
it("App renders without crashing",()=>{
  const div = document.createElement('div');
  ReactDOM.render(<App></App>,div)
})