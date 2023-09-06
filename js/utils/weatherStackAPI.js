const ACCESS_KEY = 'f71ba1ecf0a2fe236a840990b40069a4'

const _retrieveWeatherForecastMockedData = () => fetch('/data/weather-api-mocked-data.json')
.then(res => res.json())
.catch(err => console.log("Oh no", err))


const _retrieveWeatherForecastApiData = coordinates => fetch(`http://api.weatherstack.com/current?access_ke=${ACCESS_KEY}&query=${coordinates.lat},${coordinates.lng}`)
    .then(res => res.json())
    .catch(err => console.log("Oh no", err))


const retrieveWeatherForecastData = async (coordinates, isMocked) => {
    if (isMocked) {
        return await _retrieveWeatherForecastMockedData()
    }
    return await _retrieveWeatherForecastApiData(coordinates)
}