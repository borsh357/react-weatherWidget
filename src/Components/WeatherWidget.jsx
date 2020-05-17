import React from 'react';
import propTypes from 'prop-types';
import './WeatherWidget.css';

export default class WeatherWidget extends React.Component {
  render() {
    const {
      city,
      rainType,
      temperature,
      windSpeed,
      windDirection,
      humidity,
    } = this.props;
    return (
      <div
        className={
          rainType === 'Солнечно'
            ? 'weatherWidget ww-sunny'
            : rainType === 'Облачно'
            ? 'weatherWidget ww-clouds'
            : rainType === 'Переменная облачность'
            ? 'weatherWidget ww-partialClouds'
            : rainType === 'Дождь'
            ? 'weatherWidget ww-rain'
            : rainType === 'Снег'
            ? 'weatherWidget ww-snow'
            : 'weatherWidget'
        }
      >
        <div className="weatherWidget-city">{city}</div>
        <div className="weatherWidget-rainType">{rainType}</div>
        <div className="weatherWidget-temperature">{temperature}&#176;C</div>
        <div
          className={
            rainType === 'Солнечно'
              ? 'rainTypeIcon rainType-sunny'
              : rainType === 'Облачно'
              ? 'rainTypeIcon rainType-clouds'
              : rainType === 'Переменная облачность'
              ? 'rainTypeIcon rainType-partialClouds'
              : rainType === 'Дождь'
              ? 'rainTypeIcon rainType-rain'
              : rainType === 'Снег'
              ? 'rainTypeIcon rainType-snow'
              : ''
          }
        />
        <div className="text-center">
          <p>
            Ветер: {windSpeed} м/с <small>{windDirection}</small>
          </p>
          <p>Влажность: {humidity}%</p>
        </div>
      </div>
    );
  }
}

WeatherWidget.propTypes = {
  city: propTypes.string.isRequired,
  rainType: propTypes.string.isRequired,
  temperature: propTypes.number.isRequired,
  windSpeed: propTypes.number.isRequired,
  windDirection: propTypes.string,
  humidity: propTypes.number.isRequired,
};
