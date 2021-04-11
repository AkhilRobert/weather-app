import { Route } from 'react-router-dom';
import Index from './pages/index';
import WeatherDetails from './pages/weather-details/WeatherDetails';

function App() {
  return (
    <>
      <Route path={'/'}>
        <Index />
      </Route>

      <Route path={'/:id'}>
        <WeatherDetails />
      </Route>
    </>
  );
}

export default App;
