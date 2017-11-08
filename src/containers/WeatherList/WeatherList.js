import React, { Component } from 'react';
import { connect } from 'react-redux';
import  WeatherItem  from '../../components/WeatherItem/WeatherItem';
import './WeatherList.css';
import _ from 'lodash';
// import GoogleMap from '../../components/GoogleMap/GoogleMap';

class WeatherList extends Component {
    renderWeather(cityData) {
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        // const { lon, lat } = cityData.city.coord;
        return (
            <tr key={cityData.city.id}>
                <td>{cityData.city.name}</td>
                <td>
                    <WeatherItem data={temps} color="orange" units="C"/>
                </td>
                <td>
                    <WeatherItem data={pressure} color="aqua" units="hPa"/>
                </td>
                <td>
                    <WeatherItem data={humidity} color="chartreuse" units="%"/> 
                </td>
            </tr>
        )
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return { weather: state.weather }
}
export default connect (mapStateToProps)(WeatherList);