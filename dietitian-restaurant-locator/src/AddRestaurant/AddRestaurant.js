import React, { Component } from 'react';
import config from '../config';
import PropTypes from 'prop-types'

class AddRestaurant extends Component {

  state = {
    theRestaurant: '',
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
    this.props.addRestaurant({
              theRestaurant:this.state.theRestaurant,
              type: this.state.type,
          })
    this.props.history.push('/home')
    // fetch(`${config.API_ENDPOINT}/api/restaurant`, {
    //     method:'POST',
    //     headers:{
    //         'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify({
    //         title:this.state.title,
    //         description: this.state.description,
    //     })
    // })
    // .then(res => {
    //     if (!res.ok) {
    //         return res.json().then(err => {
    //             console.log(`Error Message: ${err}`)
    //             throw err
    //         })
    //     }
    //     return res.json()
    // })

    // // add restaurant, then go back to homepage
    // .then(restaurant => {
    //   this.props.addRestaurant(restaurant)
    //   this.props.history.push('/home')
    // })
    // .catch(err => {
    //     this.setState({err})
    // })
}

  render() {
    let { theRestaurant, type } = this.props

    return (
      <>
        <div className="AddRestaurant">
          <form onSubmit={this.handleSubmit}>

            {/* must give a title to the new restaurant */}
            <input
              type='text'
              placeholder='Name of the Restaurant'
              value={theRestaurant}
              onChange={this.handleChange}
              name='theRestaurant'
              className="Placeholder"
              required
              pattern="[A-Za-z0-9\~\!\@\#\$\%\^\*\(\)\_]{3}"
              theRestaurant="at least 3 characters required"
            />
            <br />

            {/* optional description */}
            <select required onChange={this.handleChange} name='type'>
              <option value=''>---</option>
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

AddRestaurant.propTypes = {
  history: PropTypes.object.isRequired
}