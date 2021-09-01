import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core'

const PlaceDetails = ({ place }) => {
    console.log(place) //do not delete ... to explore what else can be on the card
    return (
        <h1>   
          {place.name}  
        </h1>
    )
}

export default PlaceDetails
