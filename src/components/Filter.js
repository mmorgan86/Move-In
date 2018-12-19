import React, { Component } from 'react';

class Filter extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <section id="filter">
        <div className="inside">
          <h4>Filter</h4>
          <label hrmlfor="city">City</label>
          <select name="city" className="city" onChange={handleChange}>
            <option>All Cities</option>
            <option>Raleigh</option>
            <option>Clayton</option>
            <option>Durham</option>
            <option>Chapel Hill</option>
          </select>
          <label hrmlfor="homeTypes">Home Type</label>
          <select name="homeType" className="city" onChange={handleChange}>
            <option>All Homes</option>
            <option>House</option>
            <option>Townhouse</option>
            <option>Apartment</option>
          </select>
          <label hrmlfor="bedrooms">Bedrooms</label>
          <select name="bedrooms" className="bedrooms" onChange={handleChange}>
            <option value="0">0+ BR</option>
            <option value="1">1+ BR</option>
            <option value="2">2+ BR</option>
            <option value="3">3+ BR</option>
            <option value="4">4+ BR</option>
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