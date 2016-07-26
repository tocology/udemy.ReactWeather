import React from 'react'

const About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a Weather application build on React. I have built this
        for the Complete React Web App Developer Course.</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the
            JavaScript frameword used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used
            Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
}

export default About
