import React from 'react';
import { MapWithGeocode } from 'components/map/GoogleMap';

export class RentalMap extends React.Component {
    render() {
        const location = this.props.location;
        // alert(location);
        return (
            <MapWithGeocode
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB4qnnwEVXBkqOmF-p8srG9bng2i-iFDBc&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `360px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                location={location}
            />
        )
    }
}