import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

const Map = () => {
    const classes = useStyles()
    const matches = useMediaQuery('(min-width:600px)')
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}//process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map