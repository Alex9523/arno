import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';
 
function Map(){
    return(
        <GoogleMap 
            defaultZoom={13} 
            defaultCenter={{lat:46.4775, lng:30.7326}} 
        />
    )
} 

const WrapperMap = withScriptjs(withGoogleMap(Map))

function Main(){
    return(
        <div style={{width: '1000px', height: '600px'}}>
            <WrapperMap 
                googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBQ5Su6E_BMA8FRxtldPFiIQqXAaNDgVPU'}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            /> 
        </div>
        )
}

export default Main;
//AIzaSyBQ5Su6E_BMA8FRxtldPFiIQqXAaNDgVPU