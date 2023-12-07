import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/home'

const App: React.FC = () => {

  const [mode, setMode] = useState<'light' | 'dark'>('light');

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
        <div dir='rtl'>
          <CssBaseline />
          <Header setMode={setMode} mode={mode} />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
