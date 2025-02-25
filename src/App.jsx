import './App.css'
import WeatherSearch from './components/WeatherSearch';
import WeatherCard from "./components/WeatherCard";
import ContextProvider from './contexts/ContextProvider';

const App = () => {
  return (
    <ContextProvider>
      <main className="relative bg-app-background bg-center bg-cover flex justify-center items-center min-h-screen">
      <div className="absolute left-0 top-0 bg-black/60 w-full h-full"></div>
      <div className="backdrop-filter backdrop-blur-lg bg-white/10 border border-white/30 rounded-lg p-6 max-w-sm">
        <WeatherSearch />
        <WeatherCard />
      </div>
    </main>
    </ContextProvider>
    
  )
}

export default App
