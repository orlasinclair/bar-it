import React, { Component } from 'react';
import YourLocation from '../src/components/BCS/MapContainer';
import MapContainer from '../src/components/BCS/MapContainer';
import Map from "../src/components/BCS/Map"
const google = window.google;

class AppMap extends Component {
  render() {
    return (
      <div className="AppMap">
        <header className="AppMap-header">
        
        </header>
        <div className="container h-100">
          <YourLocation />
        </div>
      </div>
    );
  }
}

export default AppMap;
