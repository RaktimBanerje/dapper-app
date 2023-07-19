import React from 'react'
import { isEqual } from 'lodash'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_MAP_API_KEY } from "@env"
import { StoreContext } from '../../App'

const MyMapViewDirection = ({origin, destination}) => {
    let {dispatch} = React.useContext(StoreContext)

    const handleRoutingReady = (result) => {
        dispatch({
            type: "SET_TRAVEL_DISTANCE_DURATION",
            payload: {
                distance: Number(result.distance).toFixed(2),
                duration: convertMinsToHrsMins(parseInt(result.duration))
            }
        })    
    }

    return (
        <MapViewDirections 
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAP_API_KEY}
            strokeWidth={3}
            strokeColor="black"
            onReady={handleRoutingReady}
        />
    )
}

function convertMinsToHrsMins (mins) {
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    h = h < 10 ? '0' + h : h; // (or alternatively) h = String(h).padStart(2, '0')
    m = m < 10 ? '0' + m : m; // (or alternatively) m = String(m).padStart(2, '0')
    return `${h}:${m}`;
}

const areEqual = (prevProps, nextProps) => { return isEqual(prevProps, nextProps) } 

export default React.memo(MyMapViewDirection, areEqual)
