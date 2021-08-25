import React, { useState, useEffect, createRef } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'
import useStyles from './styles.js'

const List = () => {
    const [elRefs, setElRefs] = useState([])
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Typography variant="h4">Food & Dining around you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel id="type">Type</InputLabel>
                {/* <Select id="type" value={type} onChange={(e) => setType(e.target.value)}> */}
                <Select value={} onChange={}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default List