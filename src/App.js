import React, { Component } from 'react';

import './sass/main.scss';

import Header from './components/Header';
import Filter from './components/Filter';
import Listings from './components/Listings';

import listingsData from './data/listingsData';

class App extends Component {
  constructor() {
    super(); 
      this.state = {
        city: "All Cities",
        homeType: 'All Homes',
        bedrooms: 0,
        min_price: 0,
        max_price: 10000000,
        min_squarefeet: 0,
        max_squarefeet: 10000,
        elavator: false,
        basement: false,
        gym: false,
        pool: false,
        listingsData,
        filteredData: listingsData
    }
    this.handleChange = this.handleChange.bind(this);
    this.filteredData = this.filteredData.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value;

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
      this.filteredData()
    })
  }

  filteredData() {
    let newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price && item.price <= this.state.max_price && item.squarefeet >= this.state.min_squarefeet && item.squarefeet <= this.state.max_squarefeet && item.bedrooms >= this.state.bedrooms
    })

    if(this.state.city !== 'All Cities') {
      newData = newData.filter((item) => {
        return item.city === this.state.city;
      })
    }

    if(this.state.homeType !== 'All Homes') {
      newData = newData.filter((item) => {
        return item.homeType === this.state.homeType;
      })
    }

    this.setState({
      filteredData: newData
    })
  }

  render() {
    const { filteredData } = this.state;
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter handleChange={this.handleChange} globalState={this.state}/>
          <Listings listingsData={filteredData}/>
        </section>
      </div>
    )
  }
}

export default App;