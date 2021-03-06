import React from 'react';
import { MapWithGeocode } from 'components/map/GoogleMap';
import { connect } from 'react-redux';

import * as actions from 'actions';

class RentalMapMain extends React.Component {

    reloadMapFinish() {
        this.props.dispatch(actions.reloadMapFinish());
    }

    render() {
        // debugger;
        const { location, map: {isReloading} } = this.props;
        // alert(location);
        return (
            <MapWithGeocode
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB4qnnwEVXBkqOmF-p8srG9bng2i-iFDBc&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `410px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                location={location}
                isReloading={isReloading}
                mapLoaded={() => this.reloadMapFinish()}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        map: state.map
    }
}

export default connect(mapStateToProps)(RentalMapMain);