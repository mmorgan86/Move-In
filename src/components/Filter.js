import React, { Component } from 'react';

class Filter extends Component {
  constructor() {
    super()
    this.cities = this.cities.bind(this);
    this.homeTypes = this.homeTypes.bind(this);
    this.rooms = this.rooms.bind(this);
  }

  componentWillMount() {
    this.props.populateAction();
  }

  cities() {
    if(this.props.globalState.populateFormsData.cities !== undefined) {
      const { cities } = this.props.globalState.populateFormsData;
      return cities.map((item, i)=> {
        return <option key={item + i} value={item}>{item}</option>
      })
    }
  }

  homeTypes() {
    if(this.props.globalState.populateFormsData.homeTypes !== undefined) {
      const { homeTypes } = this.props.globalState.populateFormsData;
      return homeTypes.map((item, i)=> {
        return <option key={item + i} value={item}>{item}</option>
      })
    }
  }

  rooms() {
      if(this.props.globalState.populateFormsData.rooms !== undefined) {
      const { rooms } = this.props.globalState.populateFormsData;
      return rooms.map((item, i)=> {
        return <option key={item + i} value={item}>{item}+ BR</option>
      })
    }
  }

  render() {
    const { handleChange } = this.props;
    return (
      <section id="filter">
        <div className="inside">
          <h4>Filter</h4>
          <label hrmlfor="city">City</label>
          <select name="city" className="city" onChange={handleChange}>
          <option value='All'>All Cities</option>
            {this.cities()}
          </select>
          <label hrmlfor="homeTypes">Home Type</label>
          <select name="homeType" className="city" onChange={handleChange}>
            <option value='All'>All Homes</option>
            {this.homeTypes()}            
          </select>
          <label hrmlfor="bedrooms">Bedrooms</label>
          <select name="bedrooms" className="bedrooms" onChange={handleChange}>
            <option value='0'>0+</option>
            {this.rooms()}
          </select>
          <div className="filters price">
            <span className="title">Price </span>
            <input type="text" name="min_price" className="min-price" onChange={handleChange} value={this.props.globalState.min_price} />
            <input type="text" name="max_price" className="max-price" onChange={handleChange} value={this.props.globalState.max_price}/>
          </div>
          <div className="filters squarefeet">
            <span className="title">Square Feet</span>
            <input type="text" name="min_squarefeet" className="min-squarefeet" onChange={handleChange} value={this.props.globalState.min_squarefeet}/>
            <input type="text" name="max_squarefeet" className="max-squarefeet" onChange={handleChange} value={this.props.globalState.max_squarefeet}/>
          </div>
          <div className="filters extras">
            <span className="title">Extras</span>
            <label htmlFor="extras">
              <span>Elevator</span> 
              <input
              value="elevator" 
              name ="elevator" type="checkbox" onChange={handleChange}/>
            </label>
            <label htmlFor="extras">
              <span>Swimming Pools</span> 
              <input 
              value="pool"
              name ="pool" type="checkbox" onChange={handleChange}/>
            </label>
            <label htmlFor="extras">
              <span>Basement</span> 
              <input 
              value="basement"
              name ="basement" type="checkbox" onChange={handleChange}/>
            </label>
            <label htmlFor="extras">
              <span>Gym</span> 
              <input 
              value="gym"
              name ="gym" type="checkbox" onChange={handleChange}/>
            </label>
          </div> 
        </div>       
      </section>
    )
  }
}

export default Filter;