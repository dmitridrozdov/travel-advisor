import React from 'react'
import { Autocomplete } from '@material-ui/apio'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'

const Header = () => {
    return (
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h5'></Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
