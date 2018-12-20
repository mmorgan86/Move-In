import React, { Component } from 'react';
import listingsData from '../data/listingsData';

class Listings extends Component {
  constructor () {
    super();
    this.state = {
      name: "Mike"
    }
    this.loopListings = this.loopListings.bind(this);
  }
  

  loopListings () {
    
    let { listingsData } = this.props;

    if(listingsData == undefined ||  listingsData.length == 0) {
      return "Sorry your filter did not match any listings. Try again!"
    }
    return listingsData.map((listing, index) => {
      const { address, city, state, zipcode, bedrooms, price, squarefeet, extras, homeType, image  } = listing;

      if(this.props.globalState.view === 'box') {
      // THIS IS THE BOX VIEW  
      return (
        <div key={index} className="col-md-4">
          <div className="listing">
            <div className="listing-img" style={{
            background: `url(${image})
            no-repeat center center`
          }}>
              <span className="address">
                <p>{ `${address}`}</p> <p>{`${city}, ${state} ${zipcode}` }</p>
              </span>
              <div className="details">
               <div className="user-img"></div>
                  <div className="user-details">
                    <span className="user-name">John Doe</span>
                    <span className="post-date">05/18/2018</span>
                  </div>
                  <div className="listing-details">
                    <div className="square-feet">
                      <i className="far fa-square back-icon"></i>
                      <span>{squarefeet} ft&sup2;</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fas fa-bed back-icon"></i>
                      <span>{bedrooms} bedrooms</span>
                    </div>
                    <div className="view-btn">
                      Show
                    </div>
                  </div>
              </div>
              </div>
              <div className="bottom-info">
                <span className="price">${price}</span>
                <span className="location"><i className="fas fa-map-marker-alt"></i> {`${city}, ${state}`}</span>
              </div>
          </div>
        </div>
      )
      } else {
        // THIS IS LONG VIEW
      return (
        <div key={index} className="col-md-12 col-lg-6">
          <div className="listing">
            <div className="listing-img" style={{
            background: `url(${image})
            no-repeat center center`
          }}>
              <span className="address">
                <p>{ `${address}`}</p> <p>{`${city}, ${state} ${zipcode}` }</p>
              </span>
              <div className="details">
               <div className="user-img"></div>
                  <div className="user-details">
                    <span className="user-name">John Doe</span>
                    <span className="post-date">05/18/2018</span>
                  </div>
                  <div className="listing-details">
                    <div className="square-feet">
                      <i className="far fa-square back-icon"></i>
                      <span>{squarefeet} ft&sup2;</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fas fa-bed back-icon"></i>
                      <span>{bedrooms} bedrooms</span>
                    </div>
                    <div className="view-btn">
                      Show
                    </div>
                  </div>
              </div>
              </div>
              <div className="bottom-info">
                <span className="price">${price}</span>
                <span className="location"><i className="fas fa-map-marker-alt"></i> {`${city}, ${state}`}</span>
              </div>
          </div>
        </div>
      )
      }
    })
  
  }
  render() {
    
    return (
      <section id="listings">
        <div className="container">
        <div className="row">
          <div className="col-lg-12">
        <section className="search-area">
          <input type="text" name="search"/>
        </section>
        </div>
        </div>

        <section className="sortby-area row">
          <div className="col-lg-12">
          <div className="results">390 results found</div>
          <div className="sort-options">
            <select 
              name="sortby" className="sortby"
              onChange={this.props.handleChange}
            >
              <option value="price-low">Lowest Price</option>
              <option value="price-high">Highest Price</option>
            </select>
            <div className="view">
              <i 
                className="fas fa-list-ul"
                onClick={this.props.changeView.bind(null, 'long')}
              ></i>
              <i 
                className="fas fa-th"
                onClick={this.props.changeView.bind(null, 'box')}  
              ></i>
            </div>
          </div>
          </div>
        </section>
          
        <section className="listings-results container">
          <div className="row">
            {this.loopListings()}
          </div>
        </section>
        
    
        

        <section id="pagination">
          <ul className="pages">
            <li>Prev</li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>Next</li>
          </ul>
        </section>
        </div>
      </section>
    )
  }
}

export default Listings;