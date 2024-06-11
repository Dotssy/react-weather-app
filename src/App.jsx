import WeatherContextProvider from './context/WeatherContext';
import WeatherCard from './components/WeatherCard/WeatherCard';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import Error from './components/Error/Error';
import './App.css';

function App() {
  return (
    <WeatherContextProvider>
      <div className="App">
        <WeatherCard />
        <WeatherInfo />
        <Error />
      </div>
    </WeatherContextProvider>
  );
}

export default App;
