import React, { useState, useEffect } from 'react'
import { CssBaseline, Grid } from '@material-ui/core'

import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import { getPlacesData, getWeatherData } from './api/index'

const App = () => {
    const [places, setPlaces] = useState([])
    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 })
    const [bounds, setBounds] = useState({})
    const [childClicked, setChildClicked] = useState(null)
    const [type, setType] = useState('restaurants')
    const [rating, setRating] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [filteredPlaces, setFilteredPlaces] = useState([])
    const [autocomplete, setAutocomplete] = useState(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        })
      }, [])

    useEffect(() => {
        if(bounds.sw && bounds.ne) {
            setIsLoading(true)
            getPlacesData(type, bounds.sw, bounds.ne)
                .then((data) => {
                    setPlaces(data?.filter((place) => place.name && place.num_reviews > 0))
                    setFilteredPlaces([])
                    setIsLoading(false)
                })
        }
    },[type, bounds])

    useEffect(() => {
        const filtered = places.filter((place) => Number(place.rating) > rating)
        setFilteredPlaces(filtered)
      }, [rating])
    
    const onLoad = (autoC) => setAutocomplete(autoC)

    const onPlaceChanged = () => {
        console.log('Autocomplete getPlace is => ' + autocomplete.getPlace().geometry)
        // const lat = autocomplete.getPlace().geometry.location.lat()
        // const lng = autocomplete.getPlace().geometry.location.lng()
        // setCoordinates({ lat, lng })
    }

    return(
        <>
            <CssBaseline />
            <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad}/>
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List 
                        places={filteredPlaces.length ? filteredPlaces : places}
                        childClicked={childClicked}
                        isLoading={isLoading}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default App