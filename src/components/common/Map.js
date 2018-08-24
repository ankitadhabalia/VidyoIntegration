import React, { Component } from 'react';
import './../../map.css';

class Map extends Component {
  render() {
    return (
      <div  >
        <div className="pac-card" id="pac-card">
          <div>
            <div id="title">
              Auto Complete Search
        </div>
            <div id="type-selector" className="pac-controls">
              {/* <input type="radio" name="type" id="changetype-all" checked="checked" />
              <label for="changetype-all"> All </label> */}

              {/* <input type="radio" name="type" id="changetype-establishment" />
              <label for="changetype-establishment">Establishments</label>

              <input type="radio" name="type" id="changetype-address" />
              <label for="changetype-address">Addresses</label>

              <input type="radio" name="type" id="changetype-geocode" />
              <label for="changetype-geocode">Geocodes</label> */}
            </div>

            {/* <div id="strict-bounds-selector" className="pac-controls">
              <input type="checkbox" id="use-strict-bounds" value="" />
              <label for="use-strict-bounds">Strict Bounds</label>
            </div> */}

          </div>
          <div id="pac-container">
            <input id="pac-input" type="text"
              placeholder="Enter a location" />
          </div>

        </div>
        <div id="map"></div>
        <div id="infowindow-content">
          <img src="" width="16" height="16" id="place-icon" alt="map-images" />
          <span id="place-name" className="title"></span><br />
          <span id="place-address"></span>
        </div>
      </div>
    );
  }
}
export default Map

