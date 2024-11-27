import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentWeather: any;
  fiveDayForecast: any[] = [];
  favorites: any[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.fetchPhiladelphiaWeather();
  }

  fetchPhiladelphiaWeather() {
    this.weatherService.getCurrentConditions('349727').subscribe((data:any) => {
      this.currentWeather = {
        temperature: data[0].Temperature.Metric.Value,
        iconUrl: `https://developer.accuweather.com/sites/default/files/${data[0].WeatherIcon}-s.png`,
      };
    });

    this.weatherService.get5DayForecast('349727').subscribe((data: any) => {
      this.fiveDayForecast = data.DailyForecasts.map((forecast: any) => ({
        date: forecast.Date,
        temperature: forecast.Temperature.Maximum.Value,
      }));
    });
  }

  onSearch(event: Event) {
    const query = (event.target as HTMLInputElement).value;
    this.weatherService.searchLocation(query).subscribe((data: any) => {
      console.log(data);
    });
  }
}
