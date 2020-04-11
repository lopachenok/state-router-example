import React from "react";
import mapboxgl from 'mapbox-gl';
import {AuthContext} from "../../context/authContext";

class Map extends React.Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoibG9wYWNoZW5vayIsImEiOiJjajlmc2oxcG8yZm0xMzB0NGdzbXFnYWV2In0.TKiC96zutW_ygxZGAnj1Fw',
      style: 'mapbox://styles/mapbox/streets-v11',
      container: this.container,
      zoom: [15],
      center: [30.3532597, 59.9236375]
    })
  }

  getCenter = () => {
    console.log(this.map.getCenter())
  };

  render() {
    return <div>
      <button onClick={this.getCenter}>click me</button>
      <div style={{height: '80vh'}} className={'map'} ref={el => this.container = el }></div>
    </div>
  }
}

export default Map;
