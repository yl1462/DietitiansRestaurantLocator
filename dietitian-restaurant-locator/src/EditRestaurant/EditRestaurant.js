import React, { Component } from 'react';
// import config from '../config';
import PropTypes from 'prop-types'

class EditRestaurant extends Component {
  state = {
    theRestaurant: '',
    type: '',
    id: '',
    index: ''
  }

  componentDidMount() {
    const { theRestaurant, type, id } = this.props.location.state.restaurant
    const { index } = this.props.location.state
    this.setState({
      theRestaurant,
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
    const editedRestaurant = {
      theRestaurant: this.state.theRestaurant,
      type: this.state.type,
      id: this.state.id
  }
    e.preventDefault()
    this.props.editRestaurant(editedRestaurant, this.state.index)
    this.props.history.push('/home')
    // fetch(`${config.API_ENDPOINT}/api/restautant/${this.state.id}`, {
    //     method:'PATCH',
    //     headers:{
    //         'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify(editedRestaurant)
    // })
    // .then(() => {
    //   console.log('edit')
    //   this.props.editRestaurant(editedRestaurant, this.state.index)
    //   this.props.history.push('/home')
    // })
    // .catch(err => {
    //     this.setState({err})
    // })
}

  render() {
    const { theRestaurant, type } = this.state

    return (
      <>
        {/* submit edited restaurant, with required name, and optional type */}
        <div className="EditRestaurant">
          <form onSubmit={this.handleSubmit}>
            <input 
              type='text' 
              value={theRestaurant}  
              name='theRestaurant'
              onChange={this.handleChange}
              className="Placeholder"
              required
              // pattern="[A-Za-z0-9\~\!\@\#\$\%\^\*\(\)\_]{3}"
              min={3}
              /><br />
            <select required onChange={this.handleChange} name='type' value={type} >
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

EditRestaurant.propTypes = {
  history: PropTypes.object.isRequired
}