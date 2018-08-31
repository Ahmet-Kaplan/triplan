import React, { Component } from 'react';
import axios from 'axios';
import './MyTrips.css';
import CardList from './CardList';
import { observer, inject } from 'mobx-react';
import OneTrip from './OneTrip';


@inject('store')
@observer
class MyTrips extends Component {
  constructor() {
    super();
    this.state = { user_plans: '' }
  }

  user_plans = [{ name: 'barcelona 2018' }, { name: 'paris 2017' }, { name: 'vienna 2016' },
  { name: 'singapour 2015' }, { name: 'seoul 2014' }];


  componentDidMount = () => {
    console.log('in');
    // console.log(this.props);
    console.log(this.props.store);
    let trip_id = this.props.store.user_id;
    console.log('id: ' + trip_id);
    axios.get(`api/users/users_trips/${trip_id}`)
      .then(response => {
        let plans = response.data;
        console.log("got response!");
        console.log(response);
        this.setState({ user_plans: plans });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }


  render() {

    return (
      <div className="all">

        {/* let user_plans= this.props.user_plans; */}
        {/* {let plan_names = props.user_plans.map ( plan => plan.name)} */}

        {/* <CardList plan_names={this.state.user_plans.map( plan => plan.name)} /> */}

        <div className='search-bar'>
          <input type='text' placeholder='search...' />
        </div>
        <CardList plans={this.user_plans} />
        {/* <CardList plans={this.state.user_plans} /> */}
        {/* <OneTrip trip={this.props.store.oneTrip} /> */}
        <OneTrip />
      </div>
    );
  }

}



export default MyTrips;