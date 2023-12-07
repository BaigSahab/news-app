import React from 'react';
import { ToggleButtonGroup, ToggleButton, Box } from '@mui/material';

interface LanguageSelectorProps {
    language: 'en' | 'ar';
    setLanguage: React.Dispatch<React.SetStateAction<'en' | 'ar'>>;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, setLanguage }) => {
    const handleLanguageChange = (event: React.MouseEvent<HTMLElement>, newLanguage: 'en' | 'ar') => {
        if (newLanguage !== null) {
            setLanguage(newLanguage);
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <ToggleButtonGroup
                value={language}
                exclusive
                onChange={handleLanguageChange}
                aria-label="language-selector"
                dir='ltr'
                size='small'
            >
                <ToggleButton value="en" aria-label="en">
                    English
                </ToggleButton>
                <ToggleButton value="ar" aria-label="ar">
                    العربية
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
};

export default LanguageSelector;