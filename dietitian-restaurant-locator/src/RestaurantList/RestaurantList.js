import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config'

class RestaurantList extends Component {  
  handleDelete = (id) => {  
  fetch(`${config.API_ENDPOINT}/api/restaurants/${id}`, {
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    })
    
    .then(() => {
      this.props.deleteRestaurant(id)
      this.props.history.push('/home')
    })
    .catch(err => {
        this.setState({err})
    })
  }

  render() {
    return (
      <div className="restaurantList">

        {/* each restaurant shows the name*/}
        <ul>
          {
            this.props.restaurants.map((restaurant, index) => (
              <li key={index}>
                <p className="restaurantName">
                  {restaurant.theRestaurant}<br />
                </p>
                <p>
                  {/* let user edit or delete their restaurant items */}
                  {restaurant.type}<br />
                  <button><Link to={{ pathname: `/edit/${restaurant.id}`, state: { restaurant, index } }}>Edit</Link></button> <button onClick={() => this.props.deleteRestaurant(restaurant.id)}>Delete</button>
                </p>
              </li>
            ))
          }
        </ul>
        {/* add new restaurant button on top of the page */}
        <button><Link to='/add'>Add New</Link></button>
      </div>

    );
  }
}

export default RestaurantList;
