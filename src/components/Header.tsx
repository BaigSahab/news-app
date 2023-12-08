import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import ModeSelector from './ModeSelector';
import LanguageSelector from './LanguageToggler';
import { useTranslation } from 'react-i18next';


type HeaderProps = {
    mode: 'light' | 'dark';
    setMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
    language: 'en' | 'ar';
    setLanguage: React.Dispatch<React.SetStateAction<'en' | 'ar'>>;
};

const Header: React.FC<HeaderProps> = ({ mode, setMode, language, setLanguage }) => {
    const { t } = useTranslation()
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {t('News')}
                </Typography>
                <LanguageSelector language={language} setLanguage={setLanguage} />
                <ModeSelector mode={mode} setMode={setMode} />

            </Toolbar>
        </AppBar>
    )
}

export default Header
