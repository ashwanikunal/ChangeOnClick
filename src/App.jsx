import { useState } from 'react'

function App() {
  const [isDark ,setIsDark] = useState(false);
  const toggleDarkMode = () => {
    setIsDark(!isDark);
  }

  return (
    <>
      <div className={`flex flex-col items-center justify-center min-h-screen transition-all duration-500 ${isDark ? 'bg-black': 'bg-white'}`}>
        <h1 className={`text-4xl font-bold mb-6 transition-colors duration-500 ${isDark ? 'text-white' : 'text-black'}`}>
        {isDark ? "I am learning React" : "Hello world! This is Ashwani Kumar"}

        </h1>

        <button 
        onClick={toggleDarkMode}
        className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${isDark ? "bg-white text-black hover:bg-gray-200" :"bg-black text-white hover:bg-gray-800"}`}>
          Toggle
        </button>

      </div>  
        
    </>
  )
}

export default App
