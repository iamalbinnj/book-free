import React from 'react'
import "./navbar.css"
import { AppBar, Box, Toolbar, Typography, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: "#272343",
        }
    }
})

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <ThemeProvider theme={theme}>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static" >
                            <Toolbar>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Book Free
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </Box>
                </ThemeProvider>
            </nav>
        </>
    )
}

export default Navbar