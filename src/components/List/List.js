import React, { useState, useEffect, createRef } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'

import PlaceDetails from '../PlaceDetails/PlaceDetails'
import useStyles from './styles.js'

const List = ({ places, type, setType, rating, setRating, childClicked, isLoading }) => {
  const [elRefs, setElRefs] = useState([])
  const classes = useStyles()

  useEffect(() => {
    setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()))
  }, [places])

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.subHeader}>Food, Dinning, Hotels & Attractions around you</Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel id="type" className={classes.formFont}>Type</InputLabel>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)} className={classes.formFont}>
              <MenuItem value="restaurants" className={classes.formFont}>Restaurants</MenuItem>
              <MenuItem value="hotels" className={classes.formFont}>Hotels</MenuItem>
              <MenuItem value="attractions" className={classes.formFont}>Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="rating" className={classes.formFont}>Rating</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)} className={classes.formFont}>
              <MenuItem value="" className={classes.formFont}>All</MenuItem>
              <MenuItem value="3" className={classes.formFont}>Above 3.0</MenuItem>
              <MenuItem value="4" className={classes.formFont}>Above 4.0</MenuItem>
              <MenuItem value="4.5" className={classes.formFont}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  )
}

export default List
