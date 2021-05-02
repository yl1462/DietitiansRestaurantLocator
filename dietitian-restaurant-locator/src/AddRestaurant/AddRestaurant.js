import React, { Component } from 'react';
import config from '../config';

class AddRestaurant extends Component {

  state = {
    the_restaurant: '',
    type: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // posting new restaurant to the page and database
  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${config.API_ENDPOINT}/api/restaurant`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        the_restaurant: this.state.the_restaurant,
        type: this.state.type,
      })
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(err => {
            console.log(`Error Message: ${err}`)
            throw err
          })
        }
        return res.json()
      })

      // add restaurant, then go back to homepage
      .then(restaurant => {
        this.props.addRestaurant(restaurant)
        this.props.history.push('/home')
      })
      .catch(err => {
        this.setState({ err })
      })
  }

  render() {
    let { the_restaurant, type } = this.props

    return (
      <>
        <div className="AddRestaurant">
          <form onSubmit={this.handleSubmit}>

            {/* must give a title to the new restaurant */}
            <input
              type='text'
              placeholder='Name of the Restaurant'
              value={the_restaurant}
              onChange={this.handleChange}
              name='the_restaurant'
              className="Placeholder"
              required
              pattern="[A-Za-z0-9\~\!\@\#\$\%\^\*\(\)\_]{3}"
              the_restaurant="at least 3 characters required"
            />
            <br />

            {/* optional description */}
            <select
              required
              onChange={this.handleChange}
              name='type'
              className="Placeholder"
              type='selected'
              value={type}
            >
              <option value=''>---Type of Diet---</option>
              <option value='Keto'>Keto</option>
              <option value='Mediterranean'>Mediterranean</option>
              <option value='Plant-based'>Plant-based</option>
            </select>
            <br />

            {/* submit the new restaurant, then go back to homepage */}
            <button type='submit' className='AddRestaurant-button'>Submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default AddRestaurant;