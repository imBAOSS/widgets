import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null
    }
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.fetchWeather)
  }

  fetchWeather(pos) {
    debugger
    let lat = pos.coords.latitude;
    let lon = pos.coords.longitude;
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.cod === 200) {
        const data = JSON.parse(xmlhttp.responseText)
        this.setState({ weather: data })
        console.log(xmlhttp.responseText);
      }
    }

    xmlhttp.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=e25e6b12ae09d7e3f36780e406bf000a`, true);

    xmlhttp.send();
  }

  render() {
    let content = <div></div>

    if (this.state.weather) {
      let weather = this.state.weather;
      content = <div>
                  City: { weather.name }
                  Temp: { weather.main.temp }
                </div>
    } else {
      content = <div>Loading Weather...</div>
    }

    return(
      <div className='weather-widget-container'>
        <h3>Weather</h3>
        { content }
      </div>
    )
  }
}

export default Weather;
