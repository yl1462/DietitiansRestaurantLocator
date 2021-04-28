import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import RestaurantList from './RestaurantList'

describe('Component does not crash', () => {
  //test if page loads
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <RestaurantList restaurants={[]}/>
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe(`RestaurantList component`, () => {
  //test if test data loads into each restaurant item
  const props = {
    restaurants: [
      {
        "name": "McDonald's",
        "type": "keto"
      },

      {
        "name": "Wendy's",
        "type": "mediterranean"        
      },

      {
        "name": "Five Guys",
        "type": "plant-based"        
      },
    ],
    history: { push: () => {} },
    match: { params: "" }
  }

  it('renders a restaurant in ul for each restaurants in array', () => {
    const ul = shallow(<RestaurantList {...props} />)
      .find('ul')
    expect(toJson(ul)).toMatchSnapshot()
  })
})
