import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddRestaurant from './AddRestaurant'

describe('renders without crashing', () => {
  //test if page loads
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <AddRestaurant />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe(`AddRestaurant component`, () => {
  const props = {
    the_restaurant: 'McDonald',
    type: 'keto'
  }

  //test if testing new restaurant could be added
  it('renders the new restaurant given props', () => {
    const wrapper = shallow(<AddRestaurant {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

