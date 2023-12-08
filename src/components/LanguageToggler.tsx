import React from 'react';
import { ToggleButtonGroup, ToggleButton, Box } from '@mui/material';
import i18n from '../i18next';

interface LanguageSelectorProps {
    language: 'en' | 'ar';
    setLanguage: React.Dispatch<React.SetStateAction<'en' | 'ar'>>;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, setLanguage }) => {
    const handleLanguageChange = (event: React.MouseEvent<HTMLElement>, newLanguage: 'en' | 'ar') => {
        if (newLanguage !== null) {
            setLanguage(newLanguage);
            i18n.changeLanguage(newLanguage);
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
                sx={{
                    color: 'white'
                }}
            >
                <ToggleButton value="en" aria-label="en" style={{ color: 'white' }}>
                    English
                </ToggleButton>
                <ToggleButton value="ar" aria-label="ar" style={{ color: 'white' }}>
                    العربية
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
};

export default LanguageSelector;