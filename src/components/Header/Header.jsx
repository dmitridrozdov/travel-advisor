import React from 'react'
import { Autocomplete } from '@material-ui/apio'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'

const Header = () => {
    return (
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h5' className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display='flex'>

                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
