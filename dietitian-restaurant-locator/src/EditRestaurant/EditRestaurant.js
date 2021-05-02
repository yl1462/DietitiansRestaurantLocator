import React, { Component } from 'react';
import config from '../config';

class EditRestaurant extends Component {
  state = {
    the_restaurant: '',
    type: '',
    id: '',
    index: ''
  }

  componentDidMount() {
    const { the_restaurant, type, id } = this.props.location.state.restaurant
    const { index } = this.props.location.state
    this.setState({
      the_restaurant,
      type,
      id,
      index
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // update the selected restaurant, with the given id
  handleSubmit = (e) => {
    e.preventDefault()
    const editedRestaurant = {
      the_restaurant: this.state.the_restaurant,
      type: this.state.type,
      id: this.state.id
    }

    fetch(`${config.API_ENDPOINT}/api/restaurant/${this.state.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedRestaurant)
    })
      .then(() => {
        console.log('edit')
        this.props.editRestaurant(editedRestaurant, this.state.index)
        this.props.history.push('/home')
      })
      .catch(err => {
        this.setState({ err })
      })
  }

  render() {
    const { the_restaurant, type } = this.state

    return (
      <>
        {/* submit edited restaurant, with required name, and optional type */}
        <div className="EditRestaurant">
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              value={the_restaurant}
              name='the_restaurant'
              onChange={this.handleChange}
              className="Placeholder"
              required
              min={3}
            />
            <br />
            <select
              required
              onChange={this.handleChange}
              name='type'
              className="Placeholder"
              type='selected'
              value={type}
            >
              <option value='Keto'>Keto</option>
              <option value='Mediterranean'>Mediterranean</option>
              <option value='Plant-based'>Plant-based</option>
            </select>
            <br />
            <button
              type='submit'
            >Update</button>
          </form>
        </div>
      </>
    );
  }
}

export default EditRestaurant;
