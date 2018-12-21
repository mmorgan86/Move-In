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
        filteredData: listingsData,
        populateFormsData: '',
        sortby: 'price-low',
        view: 'long',
        search: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.filteredData = this.filteredData.bind(this);
    this.populateForms = this.populateForms.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  componentWillMount () {
    let listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price
    })

    this.setState({
      listingsData
    })
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

  changeView(viewName) {
    this.setState({
      view: viewName
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

    if(this.state.sortby === 'price-low') {
      newData = newData.sort((a, b) => {
        return a.price - b.price
      })
    }

    if(this.state.sortby === 'price-high') {
      newData = newData.sort((a, b) => {
        return b.price - a.price
      })
    }

    if(this.state.search !== '') {
      newData = newData.filter((item) => {
        let city = item.city.toLocaleLowerCase()
        let searchText =this.state.search.toLowerCase();
        let n = city.match(searchText)

        if(n !== null) {
          return true
        }
      })
    }

    this.setState({
      filteredData: newData
    })
  }

  populateForms() {
    // city
    let cities = this.state.listingsData.map((item) => {
      return item.city
    })
    cities = new Set(cities)
    cities = [...cities]

    cities = cities.sort()



    // homeType
    let homeTypes = this.state.listingsData.map((item) => {
      return item.homeType
    })
    homeTypes = new Set(homeTypes)
    homeTypes = [...homeTypes]

    homeTypes = homeTypes.sort()

    //bedrooms
    let rooms = this.state.listingsData.map((item) => {
      return item.bedrooms
    })
    rooms = new Set(rooms)
    rooms = [...rooms]

    rooms = rooms.sort();

    this.setState({
      populateFormsData: {
        homeTypes,
        rooms,
        cities
      }
    }, () => {
      console.log(this.state)
    })
  }
  
  render() {
    const { filteredData } = this.state;
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter 
            handleChange={this.handleChange} globalState={this.state}
            populateAction={this.populateForms}
          />
          <Listings 
            handleChange={this.handleChange} 
            globalState={this.state}
            listingsData={filteredData}
            changeView={this.changeView}  
          />
        </section>
      </div>
    )
  }
}

export default App;