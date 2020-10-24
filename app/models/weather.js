export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.weather = data.weather[0].main
    this.weatherDescription = data.weather[0].description
    this.icon = data.weather[0].icon
  }

  convert() {
    let temp = ((this.kelvin - 273.15) * 1.8) + 32
    return Math.floor(temp)
  }

  get WeatherTemplate() {
    return/*html*/`
<div class="row">
<div class="col-6 d-flex flex-column justify-content-center">
<img class="bw" src="http://openweathermap.org/img/w/${this.icon}.png" alt=""/>
</div>
<div class="col-6 d-flex flex-column justify-content-center">
<div class="p-2">
<h3>${this.convert()}&deg;</h3>
<p>
${this.city}
</p>
</div>
</div>
</div>

`
  }
}