import {useCallback, useEffect, useState} from 'react'
import './App.css';
import ThemeBtn from "./components/ThemeBtn.jsx";
import Card from "./components/Card.jsx";
import {ThemeProvider} from "./context/Theme.js";

function App() {

    const [themeMode, setThemeMode] = useState("light")
    const darkTheme = () => {
        setThemeMode("dark")
    }
    const lightTheme = () => {
        setThemeMode("light")
    }

    useEffect(() =>{
        document.querySelector('html').classList.remove('light', 'dark')
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])

  return (
      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>


          <div className="flex flex-wrap min-h-screen items-center">
              <div className="w-full">
                  <div className="w-full max-w-sm mx-auto flex justify-end mb-4">

                      <ThemeBtn/>

                  </div>

                  <div className="w-full max-w-sm mx-auto">

                      <Card/>
                  </div>
              </div>
          </div>

      </ThemeProvider>
  )
}

export default App
