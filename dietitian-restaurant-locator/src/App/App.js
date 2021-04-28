import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css'
import LandingPage from '../LandingPage/LandingPage'
import RestaurantList from '../RestaurantList/RestaurantList'
import AddRestaurant from '../AddRestaurant/AddRestaurant'
import EditRestaurant from '../EditRestaurant/EditRestaurant'
// import config from '../config'
import bento from './bento.png'

class App extends Component {
  state = {
    restaurants: []
  }

  //add new restaurant
  addRestaurant = (restaurant) => {
    this.setState({restaurants: [...this.state.restaurants, restaurant]}) 
  }

  //delete selected restaurant
  deleteRestaurant = (id) => {
    this.setState({restaurants: this.state.restaurants.filter(restaurant => restaurant.id !== id)}) 
  }

  //edit selected restaurant
  editRestaurant = (editedRestaurant, index) => {
    const targetRestaurant = this.state.restaurants
    targetRestaurant[index] = editedRestaurant
    this.setState({
      restaurants: [...targetRestaurant]
    })
  }
  

  //getting data from database
  componentDidMount() {
    this.setState({restaurants: [
      {theRestaurant: 'aaa', type: 'Keto', id: 1},
      {theRestaurant: 'bbb', type: 'Mediterranean', id: 2},
      {theRestaurant: 'ccc', type: 'Plant-based', id: 3}
    ]})

        // fetch(`${config.API_ENDPOINT}/api/restaurant`)
        // .then((res) => {
        //     if (!res.ok) return res.json().then(e => Promise.reject(e));
        //     return res.json();
        // })
        // .then((restaurants) => {
        //     this.setState({ restaurants });
        // })
        // .catch(error => {
        //     console.error({ error });
        // });
}

  render() {
    return (
      <div className="App">

        {/* home page */}
        <header>
            <Link to='/home' className="Home">
            <h1><img src={ bento } alt='bento box icon'/> Hey there! What's on your menu today?</h1>
            </Link>
            <br />
        </header>

        <main>  
          
        <Switch>
          {/* landing page */}
          <Route exact path='/'>
            <LandingPage />
          </Route>

          {/* display all restaurant items, with delete button next to it */}
          <Route path='/home'>
            <RestaurantList restaurants={this.state.restaurants} deleteRestaurant={this.deleteRestaurant}/>
          </Route>

          {/* add new restaurant */}
          <Route path='/add' 
            render = {props => (
              <AddRestaurant addRestaurant={this.addRestaurant} {...props}/>
            )}
          />

          {/* edit selected restaurant */}
          <Route path='/edit/:id' 
            render = {props => (
              <EditRestaurant editRestaurant={this.editRestaurant} restaurants={this.state.restaurants} {...props}/>
            )}
          />

        </Switch>

        </main><br />

        <footer>
          <p>Created by Yuri Liang: <a href="https://yl1462.github.io/Yuri_Liang_portfolioPage/" target="_blank" rel="noreferrer">Portfolio Page</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
