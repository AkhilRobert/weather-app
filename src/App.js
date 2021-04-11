import { Route, Switch } from 'react-router-dom';
import Index from './pages/index/Index';
import WeatherDetails from './pages/weather-details/WeatherDetails';

function App() {
  return (
    <>
      <Switch>

        <Route path={'/:id'}>
          <WeatherDetails />
        </Route>

        <Route path={'/'}>
          <Index />
        </Route>

      </Switch>
    </>
  );
}

export default App;
