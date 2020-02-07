import React, { Component, createRef } from 'react';
import { GOOGLE_MAP_API_KEY } from './config';
import {InfoConsumer} from './Components/context';

class GoogleMap extends Component {
  googleMapRef = React.createRef()

  componentDidMount() {
    const googleScript = document.createElement('script')
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`
    window.document.body.appendChild(googleScript)

    googleScript.addEventListener('load', googleScript.addEventListener("load", () => {
      this.googleMap = this.createGoogleMap();
      for (let i = 0; i < this._markers.length; i++) {
        this.marker = this.createMarker(this._markers[i]);
      }
    }));
  }

  createGoogleMap = () =>
    new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 15,
      center: { lat: 35.435410, lng: -5.081061 },
      disableDefaultUI: true,
    })

  _markers = [
    { "coords": { lat: 35.437517, lng: -5.080996 } },
    { "coords": { lat: 35.436372, lng: -5.080396 } },
  ];

  createMarker = (inst) =>
    new window.google.maps.Marker({
      position: inst.coords,
      map: this.googleMap,
    })

  render() {
    return (
      <div
        id="google-map"
        ref={this.googleMapRef}
        style={{ width: '100%', height: '700px' }}
      />
    )
  }
}

export default GoogleMap;