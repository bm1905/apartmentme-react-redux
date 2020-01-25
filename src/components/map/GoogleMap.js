import React from 'react';
import { Cacher } from 'services/cacher';

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    Circle,
    InfoWindow
  } from "react-google-maps";
  
function MapComponent(props) {

    const { coordinates, isError, isLocationLoaded } = props;

      return (
        <GoogleMap
            defaultZoom={13}
            defaultCenter={coordinates}
            center={coordinates}
            options={{disableDefaultUI: isError ? true : false}}
            >
            {isLocationLoaded && !isError && <Circle
                center={coordinates}
                strokeColor={"red"}
                radius={800}
                options={{
                    fillColor: '#f00',
                    strokeColor: '#1B1464'
                }}
                position={coordinates}
            />}
            {isLocationLoaded && !isError && <Marker
                position={coordinates}
            />}
            {isLocationLoaded && isError && <InfoWindow position={coordinates} options={{maxWidth: 300}}>
                <div>
                    Sorry, the location could not be identified. Please re-enter a valid address.
                </div>
            </InfoWindow> }
        </GoogleMap>
      )
}

function withGeocode(WrappedComponent) {
    return class extends React.Component {
        constructor() {
            super();

            this.cacher = new Cacher();

            this.state = {
                coordinates: {
                    lat: 0,
                    lng: 0
                },
                isError: false,
                isLocationLoaded: false
            }
        }
        componentWillMount() {
            this.getGeocodeLocation();
        }

        updateCordinates(coordinates) {
            this.setState({
                coordinates,
                isLocationLoaded: true
            })
        }

        geocodeLocation(location) {
            
            const geocoder = new window.google.maps.Geocoder();

            return new Promise((resolve, reject) => {
                geocoder.geocode({address: location}, (result, status) => {
                    if(status === 'OK') {
                        const geometry = result[0].geometry.location;
                        const coordinates = { lat: geometry.lat(), lng: geometry.lng()};

                        this.cacher.cacheValue(location, coordinates);

                        resolve(coordinates);
                    }
                    else {
                        reject('ERROR!');
                    }
                });
            });
        }

        getGeocodeLocation() {
            const location = this.props.location;
            // let location = this.props.location;
            // if(Math.floor(Math.random() * 10) > 5) {
            //     location = 'dfedf763e3jjh';
            // }


            // If location is cached, return cached values.
            if (this.cacher.isValueCached(location)) {
                this.updateCordinates(this.cacher.getCachedValue(location));
            }
            else {
                this.geocodeLocation(location).then(
                    (coordinates) => {
                        this.updateCordinates(coordinates);
                    },
                    (error) => {
                        this.setState({isError: true, isLocationLoaded: true});
                    });
            }
        }

        render() {
            // alert(this.props.location)
            return (
                <WrappedComponent {...this.state}/>
            )
        }
    }
}

  export const MapWithGeocode = withScriptjs(withGoogleMap(withGeocode(MapComponent)));
