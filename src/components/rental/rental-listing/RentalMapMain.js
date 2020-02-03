import React from 'react';
import { MapWithGeocode } from 'components/map/GoogleMapMain';

export class RentalMapMain extends React.Component {
    render() {
        const location = this.props.location;
        // alert(location);
        return (
            <MapWithGeocode
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB4qnnwEVXBkqOmF-p8srG9bng2i-iFDBc&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                location={location}
            />
        )
    }
}