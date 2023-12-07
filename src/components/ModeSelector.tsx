import React from 'react';
import { Box, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface ModeSelectorProps {
    mode: string;
    setMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const ModeSelector: React.FC<ModeSelectorProps> = ({ mode, setMode }) => {
    return (
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
    )
}

export default ModeSelector;