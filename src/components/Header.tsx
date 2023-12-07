import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import ModeSelector from './ModeSelector';


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
                <ModeSelector mode={mode} setMode={setMode} />
            </Toolbar>
        </AppBar>
    )
}

export default Header
