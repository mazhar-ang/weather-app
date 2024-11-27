import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '92z94D2LzShtAqgmYEAVAV9R2Z4eAvQe';
  private baseUrl = 'http://dataservice.accuweather.com';

  constructor(private http: HttpClient) {}

  getCurrentConditions(locationKey: string) {
    return this.http.get(
      `${this.baseUrl}/currentconditions/v1/${locationKey}?apikey=${this.apiKey}`
    );
  }

  get5DayForecast(locationKey: string) {
    return this.http.get(
      `${this.baseUrl}/forecasts/v1/daily/5day/${locationKey}?apikey=${this.apiKey}`
    );
  }

  searchLocation(query: string) {
    return this.http.get(
      `${this.baseUrl}/locations/v1/cities/search?apikey=${this.apiKey}&q=${query}`
    );
  }
}
