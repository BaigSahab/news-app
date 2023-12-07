import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/home'

const App: React.FC = () => {

  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <CssBaseline />
          <Header setMode={setMode} mode={mode} setLanguage={setLanguage} language={language} />
          <Routes>
            <Route path='/' element={<Home language={language} />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
