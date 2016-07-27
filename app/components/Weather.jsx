var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
import ErrorModal from 'ErrorModal'
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      errorMessage: undefined
    }
  },
  handleSearch: function (location) {
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, (e) => {
      this.setState({
        isLoading: false,
        errorMessage: e.message
      })
    })
  },
  componentDidMount: function() {
    const location = this.props.location.query.location

    if (location && location.length > 0) {
      this.handleSearch(location)
      window.location.hash = '#/'
    }
  },
  componentWillReceiveProps: function(newProps) {
    const location = newProps.location.query.location

    if (location && location.length > 0) {
      this.handleSearch(location)
      window.location.hash = '#/'
    }
  },
  render: function () {
    const {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError() {
      if(typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
