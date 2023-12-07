import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'


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
      <div dir='ltr'>
        <CssBaseline />
        <Header setMode={setMode} mode={mode} />
      </div>
    </ThemeProvider>
  )
}

export default App
