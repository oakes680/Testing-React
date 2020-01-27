import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { getData as mockGetData } from '../api';
import StarWarsCharacters from './StarWarsCharacters'
jest.mock('../api');

test('does this work', async() => {
    mockGetData.mockResolvedValueOnce({ 
        results:[
        {
            name:'Luke Skywalker',url:'test'
        }]})

    const { getByText, getAllByText, getByTestId } = render(<StarWarsCharacters />);
    // Click button

    expect(mockGetData).toHaveBeenCalledTimes(1);
    //   expect(mockGetData).toHaveBeenCalledWith(url);
    //expect(getAllByText(/Luke SKywalker/ig))
    // Wait for page to update with query text
    
      await wait(() =>  expect(getByText(/luke/i)))
        // fireEvent.click(getByTestId('nextP'));
  });