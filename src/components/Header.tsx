import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material'
import React from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


type HeaderProps = {
    mode: 'light' | 'dark';
    setMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
};

const Header: React.FC<HeaderProps> = ({ mode, setMode }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 1,
                        px: 3,
                    }}
                >
                    <IconButton sx={{ ml: 1 }} onClick={() => setMode((prev: 'light' | 'dark') => prev === "dark" ? 'light' : 'dark')} color="inherit">
                        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
