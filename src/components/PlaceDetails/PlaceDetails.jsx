import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles.js'

const PlaceDetails = ({ place }) => {
    console.log(place) //do not delete ... to explore what else can be on the card
    const classes = useStyles()
    return (
        <Card elevation={6}>
          <CardMedia 
            style={{ height: 350 }}
          />
        </Card>
    )
}

export default PlaceDetails
