import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import EditRestaurant from './EditRestaurant'

describe('renders without crashing', () => {
  //test if page loads
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const props = {
      state: {
        index: 0,
        restaurant: {
          title: "",
          description: "",
          id: 1
        }
      }
    }

    ReactDOM.render(
      <BrowserRouter>
        <EditRestaurant location={props} />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe(`EditRestaurant component`, () => {
  const props = {
    state: {
      index: 0,
      restaurant: {
        title: "",
        description: "",
        id: 1
      }
    }
  }

  //test if testing updated restaurant renders
  it('renders the new restaurant given props', () => {
    const wrapper = shallow(<EditRestaurant location={props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

