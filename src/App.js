import React from 'react';
import './App.css';
import Container from './Components/Container';
import WeatherWidget from './Components/WeatherWidget';

function App() {
  return (
    <Container>
      <WeatherWidget
        city="Moscow"
        rainType="Снег"
        temperature={-20}
        windSpeed={2}
        windDirection="ЮВ"
        humidity={45}
      />
      <WeatherWidget
        city="Moscow"
        rainType="Дождь"
        temperature={20}
        windSpeed={2}
        windDirection="ЮВ"
        humidity={85}
      />
      <WeatherWidget
        city="Moscow"
        rainType="Солнечно"
        temperature={20}
        windSpeed={2}
        windDirection="ЮВ"
        humidity={45}
      />
      <WeatherWidget
        city="Moscow"
        rainType="Переменная облачность"
        temperature={20}
        windSpeed={2}
        windDirection="ЮВ"
        humidity={45}
      />
      <WeatherWidget
        city="Moscow"
        rainType="Облачно"
        temperature={20}
        windSpeed={2}
        windDirection="ЮВ"
        humidity={45}
      />
    </Container>
  );
}

export default App;
